import styles from "./ButtonToggleModal.module.css";

interface ButtonToggleModalProps {
  modalType: "login" | "registration";
  setModalType: (type: "login" | "registration") => void;
}

const ButtonToggleModal = ({
  modalType,
  setModalType,
}: ButtonToggleModalProps) => {
  const toggleModal = () => {
    setModalType(modalType === "login" ? "registration" : "login");
  };

  return (
    <button className={styles.ButtonToggleModal} onClick={toggleModal}>
      {modalType === "login" ? "SIGN UP" : "SIGN IN"}
    </button>
  );
};

export default ButtonToggleModal;
