
import { useAccount } from 'wagmi'
import getTokensBurn from '../api/getTokensBurn'



async function GetTokenBurnData(productPage) {
  const { address } = useAccount()

  const waitingParent = document.createElement("div");
  waitingParent.classList.add('waiting-parent');
  const waitingText = document.createElement("h2");
  waitingText.innerText = "Reading wallet..."
  waitingParent.appendChild(waitingText);
    
    const data = await getTokensBurn(address)
    
    if(data){
      if(data.length >= 1){
        const list = document.createElement("div");
        list.classList.add('nfts-parent');   
    for (const nft of data) {

            let tokenName = nft;
            

            let childSuper = document.createElement("div");
            childSuper.classList.add('nft-superchild');
            let child = document.createElement("div");
            child.classList.add('nft-child');
            let imageParent = document.createElement("div");
            imageParent.classList.add('imageParent');
            let image = document.createElement("img");
            let customName = tokenName.tokenId;
            let type = "";
            
            const big = tokenName.tokenId >= 108;
            if(big == false ){
              image.src = "IF_Toy_Large.mp4.gif";
            }
            else{
              image.src = "IF_Toy_Small.mp4.gif";
            }
              
            
            

            image.classList.add('nft-image');
            imageParent.appendChild(image);
            let title = document.createElement("h3");
            title.classList.add('nft-title');
            
            title.innerText = tokenName.title;
            
            let buttonParent = document.createElement("div");
            buttonParent.classList.add('buttonParent');
            let button = document.createElement("button");
            button.classList.add('cta');
            button.classList.add('button');
            button.classList.add('nft-button');
             


            button.innerText = "BEGIN BURN"
            button.addEventListener("click", function () {
              productPage(nft.tokenId)
            });

            

           
            buttonParent.appendChild(button);
            child.appendChild(imageParent);
            child.appendChild(title);
            
            child.appendChild(buttonParent);
            childSuper.appendChild(child)
            list.appendChild(childSuper);

        


      }

          const sectionHeadingParent = document.createElement("div");
          sectionHeadingParent.classList.add('section-heading-parent');
          const headingText = document.createElement("h2");
          headingText.classList.add('heading-text');
          headingText.classList.add('h2');
          headingText.classList.add('section-heading-text');
          headingText.innerText = "Select Burnable Token"
          const headingParagraph = document.createElement("p");
          headingParagraph.classList.add('paragraph');
          headingParagraph.classList.add('section-paragraph');
          headingParagraph.innerText = "Select an Invisible Friends Physical Toy token below to begin the claim process. Please note that only one token can be claimed at a time."
          sectionHeadingParent.appendChild(headingText);
          sectionHeadingParent.appendChild(headingParagraph);

          
            let parent = document.getElementById("nfts-container");
            if(parent){
                parent.innerHTML = "";
                parent.appendChild(sectionHeadingParent);
                parent.appendChild(list);
            }
           
    }
    else{
      const list = document.createElement("div");
        list.classList.add('nfts-parent');   
        list.classList.add('no-tokens');  
      let noTokens = document.createElement("h1");
      noTokens.classList.add('no-token-text');
            
      noTokens.innerText = "NO TOKENS FOUND";
            let noTp = document.createElement("p");
            noTp.classList.add('no-token-p');
            
            noTp.innerText = "Try connecting a different wallet";

        list.appendChild(noTokens)
        list.appendChild(noTp)

        let parent = document.getElementById("nfts-container");
        if(parent){
          parent.innerHTML = "";
          parent.appendChild(list);
        }
         
    }
    }
}

export default function TokenGridBurn(props) {
    
     GetTokenBurnData(props.productPage)


return (
            <div>
               
            </div>
          )
}