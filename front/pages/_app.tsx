import type { AppProps } from 'next/app'
import AppLayout from '../component/Applayout'

export default function App({ Component, pageProps }: AppProps) {
  return <AppLayout>
    <Component {...pageProps} />
  </AppLayout>
}
