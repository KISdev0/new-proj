import { ModalEntry } from "./ui/ModalEntry/ModalEntry";
import { ModalRegistration } from "./ui/ModalRegistration/ModalRegistration";
import "./global.css";
import { useState } from "react";
import ButtonToggleModal from "./ui/ButtonToggleModal/ButtonToggleModal";

type typeModalType = "login" | "registration";

function App() {
  const [modalType, setModalType] = useState<typeModalType>("login");

  return (
    <div className="App">
      <ButtonToggleModal modalType={modalType} setModalType={setModalType} />
      {modalType === "login" ? <ModalEntry /> : <ModalRegistration />}
    </div>
  );
}

export default App;
