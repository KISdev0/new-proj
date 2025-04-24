import { useState } from 'react'
import styles from './Modal.module.css'


export const Modal = () => {
    const[credentials, setCredentials] = useState({
        Username: '',
        Password: ''
    })

     

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Credentials:", credentials)

        setCredentials({
            Username: '',
            Password: ''
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
            <p>Login Form</p>
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
            <button 
            type='submit'
            className={styles.button}
            >LOGIN</button>
        </form>
        </div>

    )
}