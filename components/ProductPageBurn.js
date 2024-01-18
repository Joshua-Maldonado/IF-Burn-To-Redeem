
import ProductFormBurn from './ProductFormBurn'




export default function ProductPageBurn(props) {
    function toggleSizeChart() {
        var target = document.getElementById("size-chart-target");
        //console.log("Target: "+target.classList.contains("hidden"));
        if(target.classList.contains("hidden")){
          target.classList.remove("hidden");
        }
     }

     function closeSizeChart() {
        var target = document.getElementById("size-chart-target");
        //console.log("Target: "+target.classList.contains("hidden"));
        if(target.classList.contains("hidden")){
          
        }
        else{
          target.classList.add("hidden");
        }
      }

      function runError() {
        props.error()
      }
      
      console.log("Token ID Clicked: "+props.tokenid)

  return (
    <div  className="verified-parent">
     <div className="redirect-section">
        <ProductFormBurn success={props.success} burning={props.burning} wallet={props.wallet} tokenid={props.tokenid} error={props.error}></ProductFormBurn> 
         {/* <img src="size-chart.png" loading="lazy" sizes=""  alt="" className="product-img"></img> */}
      
        
      </div>
   </div>
  )
}