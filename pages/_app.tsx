import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Fonts
import { Roboto_Slab } from "@next/font/google";
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={robotoSlab.className}>
      <Component {...pageProps} />
    </div>
  )
}
