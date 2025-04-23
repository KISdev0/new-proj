import { useState } from 'react'
import styles from './ModalReg.module.css'




export const ModalReg = () => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [passA, setPassA] = useState('')

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Username:', user)
        console.log('Password:', pass)
        console.log('Password again:', passA)
    }

    return (
        <div>

        <div className={styles.glass}>
        </div>
        <form onSubmit={onSubmit} className={styles.form}>
            <p>Registration Form</p>
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

            <input 
            className={styles.input} 
            placeholder="Password again"
            onChange={e => setPassA(e.target.value)}
            value={passA}
            />

            <button 
            className={styles.button}>SIGN UP</button>
        </form>
        </div>

    )
}