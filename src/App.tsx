import { Modal } from "./ui/Modal/Modal";
import { ModalReg } from "./ui/ModalReg/ModalReg";

let modal_type = 'login';

modal_type = 'Registration'

function App() {
  return (
    <div className="App">
      
      {modal_type === 'login'? <Modal />: <ModalReg />}
      
    </div>
  );
}

export default App;


