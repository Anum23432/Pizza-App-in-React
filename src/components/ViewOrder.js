// import React from 'react';
import React, {useEffect, useState} from 'react';

function ViewOrder(){
        
const [pizzaDetails, setPizzaDetails] = useState([])

useEffect(() => {
    fetch('https://order-pizza-api.herokuapp.com/api/ui/?ref=apilist.fun#!/Orders/orders_read_all')
.then(response => response.json())
.then(data =>{
    setPizzaDetails(data.response);
    console.log(data.response)
    console.log(pizzaDetails)
})
  },[])  
  
return (
    <div>
      {pizzaDetails.map((pizza) =>(
          <ViewOrder
          key = {pizza.Order_ID}
          crust = {pizza.Crust}
          />
      ))}


    </div>
)
        

    
}

export default ViewOrder;