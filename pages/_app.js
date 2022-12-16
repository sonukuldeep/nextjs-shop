import '../styles/globals.css'
import Layout from '../Components/Layout'
import ScrollState from '../Components/ScrollState'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ScrollState>
        <Component {...pageProps} />
      </ScrollState>
    </Layout>
  )
}

export default MyApp
