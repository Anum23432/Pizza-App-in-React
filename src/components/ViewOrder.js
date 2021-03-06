import React, {useEffect, useState} from 'react';


function ViewOrder(){
        
const [pizzaData, setPizzaData] = useState([]);

useEffect(() => {
    fetch("https://order-pizza-api.herokuapp.com/api/orders")
.then((response) => { console.log (response.json)
  response.json()
.then((result) =>{
    console.log("result",result)
    setPizzaData(result)
})
  
})
  },[]) 

return(
<>
{pizzaData.map((item) =>(
      
      <div class="card mb-3 mx-auto" style=style={{width: '200px', margin: '20px', padding:'12px',height:'200px', backgroundColor:'wheat',boxShadow:'0 0 10px 0 white', opacity:'0.8'}}>
      <div class="row g-0" >
      <div class="col-md-8">
      <div className="card-body" style={{color:'purple'}}>
        <div className='card-title'>Crust: {item.Crust} </div>
        <div className='card-subtitle'>Flavor: {item.Flavour} </div>
        <div className='card-text'>Size: {item.Size} </div><br/>
        <div className='card-order'>Order_ID: {item.Order_ID}</div>
      </div>
      </div>
      </div>
      </div>


))}
</>

);} 
  

export default ViewOrder;
