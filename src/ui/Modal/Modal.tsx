import { useState } from "react";
import { ModalProps, Credentials } from "../../Types";
import styles from "./Modal.module.css";

export const Modal = ({
  title,
  fields,
  buttonText,
  onSubmit,
  initialCredentials,
}: ModalProps) => {
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(credentials);
    setCredentials(initialCredentials);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev: Credentials) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.glass}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p>{title}</p>
        {fields.map((field) => (
          <label htmlFor={field.name} key={field.name}>
            <input
              id={field.name}
              name={field.name}
              className={styles.input}
              placeholder={field.placeholder}
              onChange={handleChange}
              value={credentials[field.name]}
              type={field.type || "text"}
            />
          </label>
        ))}
        <button type="submit" className={styles.button}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};
