
import { useEffect, useState } from 'react';
import ProductPage from './ProductPage'
import ProductPageBurn from './ProductPageBurn'
import DisplayTokens  from './DisplayTokens'
import DisplayToBurn  from './DisplayToBurn'
import { Token } from 'aws-sdk';
import verify from '../api/verify'
import { useAccount } from 'wagmi'
import React from 'react'
import VerifyAccout from './VerifyAccount'
import mintToken from '../api/mintToken'
import signMessage from '../api/signMessage'

export default function Account() {
  const [ status, setStatus ] = useState("")
  const [ logged, setLogged ] = useState("")
  const { address } = useAccount();
  const { connector: activeConnector } = useAccount()
  
  
  useEffect(() => {
    const handleConnectorUpdate = ({account, chain}) => {
        if (account) {
          
          setLogged(account)
          home();
        } else if (chain) {
          
        }
      }
  
      if (activeConnector) {
        activeConnector.on('change', handleConnectorUpdate)
      }

      const loadData = async () => {
      

      
        home();
        const homeBtn = document.getElementById("home-button")
        if(homeBtn){
          homeBtn.addEventListener("click", home)
        }
        
  
      };
  
      loadData();
  
    return () => activeConnector.off('change', handleConnectorUpdate)
    }, [activeConnector])

  
  
 

  
  function ProductPagetoBurn(tokenid){
    setStatus(
      <div>
        <ProductPageBurn burning={burning} success={successBurn} tokenid={tokenid} error={errorBurn} wallet={address}></ProductPageBurn>
      </div>
    );
  }

   


function burning(){
  setStatus(
    <div className="redirect-section">
          <h1 className="heading mobile">Burning Tokens</h1>
          <p className="paragraph">Do not refresh this page!</p>      
      </div>
  );
}

function successBurn () {
  setStatus(
    <div className="redirect-section">
          <h1 className="heading mobile">Your order has been placed!</h1>
          <p className="paragraph">You will receive a order confirmation email shortly.</p>
          <button className='cta button big-btn' onClick={home}>Return Home</button> 
      </div>
  );
}
function errorBurn () {
  setStatus(
    <div className="redirect-section">
          <h1 data-w-id="aa3fb2eb-a63f-4694-1b36-4534ed4f5a82" className="heading mobile">Error!</h1>
          <p className="paragraph">There was an error burning this token please try again</p>
          <button className='cta button big-btn' onClick={home}>Return Home</button> 
      </div>
  );
}

  function errorFunction(){
    setStatus(
      <div className="redirect-section">
            <h1 data-w-id="aa3fb2eb-a63f-4694-1b36-4534ed4f5a82" className="heading mobile">Error!</h1>
            <p className="paragraph">There was an error verifying that you own this token</p>      
        </div>
    );
  }

  async function sign(){
    
  }


  function TokenSelectBurn(){
    setStatus(
      <div>
                <DisplayToBurn productPage={ProductPagetoBurn} error={errorFunction} account={ address }></DisplayToBurn>
        </div>
    );
  }
  
  
  function home() {
    setStatus(
      <div>
                <DisplayToBurn productPage={ProductPagetoBurn} error={errorFunction} account={ address }></DisplayToBurn>
        </div>
    );
  }

  

  return (
    <div className='page-section'>
    { status }
    </div>
  )
}

