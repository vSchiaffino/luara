import Link from 'next/link'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav className="bg-indigo-500 fixed w-full top-0">
        <ul className="py-5">
          <div className="container mx-auto max-w-7xl flex justify-center">
            <li className="px-5">
              <Link href="/" className="text-white font-medium text-lg">
                Luara
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}
