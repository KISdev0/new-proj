import styles from './ModalReg.module.css'




export const ModalReg = () => {
    return (
        <div>

        <div className={styles.glass}>
        </div>
        <form className={styles.form}>
            <p>Registration Form</p>
            <input className={styles.input} placeholder="Username"/>
            <input className={styles.input} placeholder="Password"/>
            <input className={styles.input} placeholder="Password again"/>
            <button className={styles.button}>SIGN UP</button>
        </form>
        </div>

    )
}