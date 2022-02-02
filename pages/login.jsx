import styles from '../styles/login.module.css'

const Login = () => {
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <p className={styles.card_title}>Bem vindo</p>

                <input className={styles.input} type='text' placeholder='Login'/>
                <input className={styles.input} type='text' placeholder='Senha'/>

                <button className={styles.button}>
                    <p className={styles.button_text}>Entrar</p>
                </button>
            </div>
        </div>
    )
}

export default Login