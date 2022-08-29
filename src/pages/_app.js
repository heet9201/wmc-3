import { Navbar } from '../components/Navbar'
import '../styles/globals.css'
import '../styles/showcase.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <div className='z-50'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp
