import { useState } from "react";
import styles from "./ModalReg.module.css";

export const ModalReg = () => {
  const DEFAULT_CREDENTIALS = {
    Username: "",
    Password: "",
    PasswordRepeat: "",
  };

  const [credentials, setCredentials] = useState(DEFAULT_CREDENTIALS);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Credentials:", credentials);

    setCredentials(DEFAULT_CREDENTIALS);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.glass}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p>Registration Form</p>
        <label htmlFor="Username">
          <input
            id="Username"
            name="Username"
            className={styles.input}
            placeholder="Username"
            onChange={handleChange}
            value={credentials.Username}
          />
        </label>

        <label htmlFor="Password">
          <input
            id="Password"
            name="Password"
            className={styles.input}
            placeholder="Password"
            onChange={handleChange}
            value={credentials.Password}
          />
        </label>

        <label htmlFor="PasswordRepeat">
          <input
            id="PasswordRepeat"
            name="PasswordRepeat"
            className={styles.input}
            placeholder="Repeat Password"
            onChange={handleChange}
            value={credentials.PasswordRepeat}
          />
        </label>

        <button className={styles.button}>SIGN UP</button>
      </form>
    </div>
  );
};
