import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import api from '../api/api.jsx'

const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [canLogIn, setCanLogIn] = useState(false)

    const refreshCanLogin = () => {
        let value = true
        if (!password || password === "") {
            value = false
        }
        if (!login || login === "") {
            value = false
        }

        setCanLogIn(value)
    }

    const onInputLogin = (e) => {
        console.log(e.target.value)
        setLogin(e.target.value)
        refreshCanLogin()
    }

    const onInputPassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.valuee)
        refreshCanLogin()
    }

    const onClickLogin = () => {
        api.login().then(resp => {
            console.log(resp)
        })
    }

    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <p className={styles.card_title}>Bem vindo</p>

                <input className={styles.input} value={login} type='text' onInput={onInputLogin} placeholder='Login'/>
                <input className={styles.input} value={password} type='text' onInput={onInputPassword} placeholder='Senha'/>

                <button className={styles.button} onClick={onClickLogin} disabled={!canLogIn}>
                    <p className={styles.button_text}>Entrar</p>
                </button>
            </div>
        </div>
    )
}

export default Login