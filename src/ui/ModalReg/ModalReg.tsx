import { useState } from 'react'
import styles from './ModalReg.module.css'




export const ModalReg = () => {

    const[credentials, setCredentials] = useState({
        Username: '',
        Password: '',
        PasswordAgain: ''
    })

     

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Credentials:", credentials)

        setCredentials({
            Username: '',
            Password: '',
            PasswordAgain: ''
        })
            }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const{name, value} = e.target
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>

        <div className={styles.glass}>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
            <p>Registration Form</p>
            <input
            name='Username'
             className={styles.input} 
             placeholder="Username"
             onChange={handleChange}
             value={credentials.Username}
             />
             

            <input 
            name='Password'
            className={styles.input} 
            placeholder="Password"
            onChange={handleChange}
            value={credentials.Password}
            />

            <input 
            name='PasswordAgain'
            className={styles.input} 
            placeholder="Password again"
            onChange={handleChange}
            value={credentials.PasswordAgain}
            />

            <button 
            className={styles.button}>SIGN UP</button>
        </form>
        </div>

    )
}