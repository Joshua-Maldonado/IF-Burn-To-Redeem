export default async function sendNewOrder(order) {
    
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
        return response.json();
        
      }).then(function(jsonData) {
        return {
            jsonData
        }
      })
      return (result)
  }