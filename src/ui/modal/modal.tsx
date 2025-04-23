import styles from './modal.module.css'


export const Modal = () => {
    return (
        <div>

        <div className={styles.glass}>
        </div>
        <form className={styles.form}>
            <p>Login Form</p>
            <input className={styles.input} placeholder="Username"/>
            <input className={styles.input} placeholder="Password"/>
            <button className={styles.button}>LOGIN</button>
        </form>
        </div>

    )
}