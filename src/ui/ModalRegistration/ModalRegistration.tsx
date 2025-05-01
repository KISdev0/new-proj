import { DEFAULT_CREDENTIALS_REGISTRATION } from "../../Consts";
import { Modal } from "../Modal/Modal";

export const ModalRegistration = () => {
  const handleSubmit = (
    credentials: typeof DEFAULT_CREDENTIALS_REGISTRATION
  ) => {
    console.log("Данные пользователя:", credentials);
  };

  return (
    <Modal
      title="Форма регистрации"
      fields={[
        { name: "username", placeholder: "Имя пользователя" },
        { name: "password", placeholder: "Пароль", type: "password" },
        {
          name: "passwordRepeat",
          placeholder: "Повторите пароль",
          type: "password",
        },
      ]}
      buttonText="Зарегистрироваться"
      onSubmit={handleSubmit}
      initialCredentials={DEFAULT_CREDENTIALS_REGISTRATION}
    />
  );
};
