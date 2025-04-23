import { useState } from 'react'
import styles from './Modal.module.css'


export const Modal = () => {

    const[user, setUser] = useState('')    
    const[pass, setPass] = useState('')    

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Username:", user)
        console.log("Password:", pass)
    }
    return (
        <div>

        <div className={styles.glass}>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
            <p>Login Form</p>
            <input 
            className={styles.input} 
            placeholder="Username"
            onChange={e => setUser(e.target.value)} 
            value={user}
            />

            <input 
            className={styles.input} 
            placeholder="Password"
            onChange={e => setPass(e.target.value)} 
            value={pass}
            />
            <button 
            type='submit'
            className={styles.button}
            >LOGIN</button>
        </form>
        </div>

    )
}