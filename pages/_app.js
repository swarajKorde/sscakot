import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ModeState from '../contex/ModeState'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ModeState>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ModeState>
    </>
  )
}

export default MyApp
