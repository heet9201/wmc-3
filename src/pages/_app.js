import { Navbar } from '../components/Navbar'
import '../styles/globals.css'
import '../styles/showcase.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
