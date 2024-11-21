import { useModalContext } from "../context/context";

type IModalType = "mobile_sidebar";

export const useModal = () => {
  const { type, isOpen, onModalClose, onOpenModal } = useModalContext();

  const onOpen = ({ type }: { type: IModalType }) => {
    onOpenModal(type);
  };
  const onClose = () => {
    onModalClose();
  };

  return { onOpen, onClose, type, isOpen };
};
