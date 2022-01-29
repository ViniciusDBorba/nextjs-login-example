import '../styles/globals.css'
import styles from '../styles/MainApp.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.content_wrapper}>
      <Component {...pageProps} />
    </div>
  )
  
  
}

export default MyApp
