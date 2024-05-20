import {useContext} from "react";
import {ModalContext} from "@/lib/providers/modal.provider";

export const useModal = () => {
    const {showModal, showConfirm} = useContext(ModalContext);
    return {showModal, showConfirm};
};

