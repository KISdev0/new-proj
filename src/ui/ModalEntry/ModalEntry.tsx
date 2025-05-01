import { useState } from "react";
import styles from "./ModalEntry.module.css";

export const ModalEntry = () => {
  const DEFAULT_CREDENTIALS = {
    username: "",
    password: "",
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
        <p>Login Form</p>
        <label htmlFor="username">
          <input
            id="username"
            name="username"
            className={styles.input}
            placeholder="Username"
            onChange={handleChange}
            value={credentials.username}
          />
        </label>

        <label htmlFor="password">
          <input
            id="password"
            name="password"
            className={styles.input}
            placeholder="Password"
            onChange={handleChange}
            value={credentials.password}
          />
        </label>
        <button type="submit" className={styles.button}>
          SIGN IN
        </button>
      </form>
    </div>
  );
};
