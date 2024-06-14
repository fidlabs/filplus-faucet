"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  CardContent,
  CardFooter,
  CardHeader,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useOutsideAlerter } from "@/hooks";
import { ModalInstance, ModalOptions } from "@/lib/interfaces/modal.interface";

export const ModalContext = createContext({
  showModal: (
    value: ReactNode,
    options?: Partial<ModalOptions>,
  ): Promise<boolean> => Promise.resolve(false),
  showConfirm: (
    value: ReactNode,
    options?: Partial<ModalOptions>,
  ): Promise<boolean> => Promise.resolve(false),
});

interface ModalWrapperProps {
  children: ReactNode;
  index: number;
  question?: boolean;
  close: () => void;
  confirm?: () => void;
  cancel?: () => void;
  options?: ModalOptions;
}

const ModalWrapper = ({
  children,
  index,
  close,
  question,
  cancel,
  confirm,
  options,
}: ModalWrapperProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const modalRef = useRef(null);
  useOutsideAlerter(modalRef, () => {
    if (!options?.persistent) {
      handleClose(close);
    }
  });

  const modalStyles = useMemo(() => {
    if (options?.sideModal) {
      return "top-0 right-0 bottom-0";
    } else {
      return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    }
  }, [options?.sideModal]);

  const modalAnimation = useMemo(() => {
    if (options?.sideModal) {
      return isClosing
        ? "animate__animated animate__fadeOutRight animate__faster ease-out-circ pointer-events-none"
        : "animate__animated animate__fadeInRight animate__faster ease-out-circ";
    } else {
      return isClosing
        ? "animate__animated animate__fadeOut animate__faster pointer-events-none"
        : "animate__animated animate__fadeIn animate__faster";
    }
  }, [options?.sideModal, isClosing]);

  const handleClose = (callback?: () => void) => {
    setIsClosing(true);
    setTimeout(() => {
      callback?.();
    }, 350);
  };

  return (
    <div
      key={index}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      style={{ zIndex: 1000 + index }}
    >
      <div
        className={cn(
          "fixed max-h-screen overflow-auto",
          modalStyles,
          modalAnimation,
        )}
        ref={modalRef}
      >
        <Card className="h-full flex flex-col">
          <CardHeader className="relative !pb-6">
            <div className="font-semibold">
              {options?.title || (question ? "Confirm" : " ")}
            </div>
            <div
              className="absolute right-2 top-2 w-8 h-8 cursor-pointer"
              onClick={() => handleClose(close)}
            >
              X
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-center items-center">
            {children}
          </CardContent>
          {question && (
            <CardFooter className="flex justify-end gap-2 mt-4">
              <Button variant="ghost" onClick={() => handleClose(cancel)}>
                {options?.cancelText || "Cancel"}
              </Button>
              <Button onClick={() => handleClose(confirm)}>
                {options?.confirmText || "Confirm"}
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalWrapperID, setModalWrapperID] = useState<string>("");
  const [modals, setModals] = useState<ModalInstance[]>([]);

  const addModal = (modal: ModalInstance) => {
    setModals([...modals, modal]);
    setModalWrapperID(Math.random().toString(36).substring(7));
  };

  const removeModal = () => {
    setModals(modals.slice(0, modals.length - 1));
    setModalWrapperID(Math.random().toString(36).substring(7));
  };

  const renderModal = (
    value: ReactNode,
    isQuestion: boolean,
    options?: Partial<ModalOptions>,
  ) => {
    return new Promise<boolean>((resolve) => {
      const confirm = () => {
        removeModal();
        resolve(true);
      };

      const cancel = () => {
        removeModal();
        resolve(false);
      };

      const modal = (
        <ModalWrapper
          close={cancel}
          confirm={confirm}
          cancel={cancel}
          question={isQuestion}
          index={modals.length}
          options={options}
        >
          {value}
        </ModalWrapper>
      );

      const modalInstance: ModalInstance = {
        modal,
        isQuestion: true,
        options,
      };
      addModal(modalInstance);
    });
  };

  const showModal = (value: ReactNode, options?: Partial<ModalOptions>) => {
    return renderModal(value, false, options);
  };

  const showConfirm = (value: ReactNode, options?: Partial<ModalOptions>) => {
    return renderModal(value, true, options);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        showConfirm,
      }}
    >
      {children}
      <div id={modalWrapperID}>
        {modals.map((modal, index) => (
          <div key={index}>{modal.modal}</div>
        ))}
      </div>
    </ModalContext.Provider>
  );
};
