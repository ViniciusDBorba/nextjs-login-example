import { RouteGuard } from '../components/RouteGuard'
import '../styles/globals.css'
import styles from '../styles/MainApp.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.content_wrapper}>
      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    </div>
  )
  
  
}

export default MyApp
