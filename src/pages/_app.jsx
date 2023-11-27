import '@/styles/App.sass'
import { Context } from '@/components/context/Context'

export default function MyApp({ Component, pageProps }) {
  return (
    <Context>
        <Component {...pageProps} />
    </Context>
  )
}
