export default async function sendNewOrder(order) {
    console.log("ORDER TO SEND: ",order);
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        params:  order ,
        body: order   
    };
   

    const result = await fetch('/neworder/',{
        method: 'POST',
        mode: "cors",
        credentials: "same-origin",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)  
    }).then(function(response) {
        console.log("RES STATUS: "+response.status )
        return response.json();
        
      }).then(function(jsonData) {
        console.log("RES DATA: "+ JSON.stringify(jsonData) )
        return {
            jsonData
        }
      })
      return (result)
  }