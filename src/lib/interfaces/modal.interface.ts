import { ReactNode } from "react";

export type ModalType = "success" | "error" | "warning" | "info";

export interface ModalOptions {
  title?: string;
  confirmText?: string;
  cancelText?: string;
  modalType?: ModalType;
  sideModal?: boolean;
  persistent?: boolean;
}

export interface ModalInstance {
  modal: ReactNode | string;
  isQuestion: boolean;
  options?: ModalOptions;
}
