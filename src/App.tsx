import { ModalEntry } from "./ui/Modal/ModalEntry";
import { ModalReg } from "./ui/ModalReg/ModalReg";
import "./global.css";
import { useState } from "react";
import ButtonToggleModal from "./ui/ButtonToggleModal/ButtonToggleModal";

type typeModalType = "login" | "registration";

function App() {
  const [modalType, setModalType] = useState<typeModalType>("login");

  return (
    <div className="App">
      <ButtonToggleModal modalType={modalType} setModalType={setModalType} />
      {modalType === "login" ? <ModalEntry /> : <ModalReg />}
    </div>
  );
}

export default App;
