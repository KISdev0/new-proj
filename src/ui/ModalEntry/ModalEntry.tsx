import { DEFAULT_CREDENTIALS_ENTRY } from "../../Consts";

import { Modal } from "../Modal/Modal";

export const ModalEntry = () => {
  const handleSubmit = (credentials: typeof DEFAULT_CREDENTIALS_ENTRY) => {
    console.log("Данные пользователя:", credentials);
  };

  return (
    <Modal
      title="Форма входа"
      fields={[
        { name: "username", placeholder: "Имя пользователя" },
        { name: "password", placeholder: "Пароль", type: "password" },
      ]}
      buttonText="Войти"
      onSubmit={handleSubmit}
      initialCredentials={DEFAULT_CREDENTIALS_ENTRY}
    />
  );
};
