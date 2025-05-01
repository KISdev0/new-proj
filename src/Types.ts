export interface ModalProps {
  title: string;
  fields: Field[];
  buttonText: string;
  onSubmit: (credentials: Credentials) => void;
  initialCredentials: Credentials;
}

export interface Credentials {
  username: string;
  password: string;
  passwordRepeat?: string;
}

export interface Field {
  name: "username" | "password" | "passwordRepeat";
  placeholder: string;
  type?: string;
}
