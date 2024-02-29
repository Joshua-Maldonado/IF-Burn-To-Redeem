import { ConnectKitProvider } from 'connectkit'
import NextHead from 'next/head'
import { WagmiConfig } from 'wagmi'
import { client } from '../src/wagmi'
import Page from './indexSave'
import localFont from 'next/font/local'
import '../src/style.css'

import Script from 'next/script'


const PtRootUi = localFont({
  src: [
    {
      path: '../public/fonts/pt-root-ui.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/pt-root-ui_medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/pt-root-ui_bold.woff2',
      weight: '700',
    },
  ],
});


function App() {
  

   
  
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <NextHead>
          <title>Invisible Friends Physical Product Claim</title>
          <link rel="shortcut icon" href="handshake.svg" />
          <link rel="stylesheet" href="https://use.typekit.net/kfm8mdi.css"></link>
        </NextHead>
        <style jsx global>{`
        :root {
          /* ... */
          --pt-root-ui: ${PtRootUi.style.fontFamily};
        }
        p,label{
          font-family: ${PtRootUi.style.fontFamily} !important;
          font-weight: 400;
        }
        h1,h2,h3,h4,h5 {
          font-family: ${PtRootUi.style.fontFamily} !important;
          font-weight: 500;
        }
        .main-content h1, h2, h3, h4, h5 {
          font-family: "fatfrank", sans-serif !important;
      }
      `}</style>
        <Script
              id="googlemaps"
              type="text/javascript"
              strategy="beforeInteractive"
              src={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAPDMmDM2Sw1i3MHrHNTWxCKC979lPxG90&amp;libraries=places&amp;callback=initMap'}

        />


        <Page></Page>

      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App
