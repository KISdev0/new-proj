import { useState } from "react";
import styles from "./ModalEntry.module.css";

export const ModalEntry = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Credentials:", credentials);

    setCredentials({
      username: "",
      password: "",
    });
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
        <input
          name="username"
          className={styles.input}
          placeholder="Username"
          onChange={handleChange}
          value={credentials.username}
        />

        <input
          name="password"
          className={styles.input}
          placeholder="Password"
          onChange={handleChange}
          value={credentials.password}
        />
        <button type="submit" className={styles.button}>
          SIGN IN
        </button>
      </form>
    </div>
  );
};
