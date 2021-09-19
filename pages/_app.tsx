import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="container">
      <Sidebar/>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
