import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
