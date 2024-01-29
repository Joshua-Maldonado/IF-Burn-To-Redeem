import { ConnectKitButton } from 'connectkit'
import { useAccount } from 'wagmi'
import  Account  from '../components/Account'


function Page() {
  const { account, isConnected } = useAccount()
  

  

  return (
    <div className='body-section'>
      <div className='page-header'>
        <div className='header-content'>
          <div className='logo-content'>
            <img src="handshake.svg" className='logo-img'/>
          </div>
        </div>
      </div>
      <div className='main-content'>
        <div className='index-section'>
          <div className='top-section'>
            <h1 className="z-10 text-5xl md:text-9xl leading-solid">INVISIBLE<br/>FRIENDS<span className="absolute text-base align-top md:text-xl">NFT</span></h1>
            <h2 className="uppercase md:text-5xl">Physical Collectible Burn</h2>
          </div>
          <h2 className='heading-text h2'>Coming Soon</h2>
        
        </div>
      </div>
      <div className='footer'>
        <p className='footer-text'>Web3 & verification by Top Drawer Merch</p>
      </div>
    </div>
  )
}


export default Page
