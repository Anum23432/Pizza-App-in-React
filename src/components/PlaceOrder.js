import React from 'react';
import swal from 'sweetalert';

function PlaceOrder(){
    return(
        <>
        <div className="star">
   <select className="big">
       <option >Crust</option>
       <option>Thin Crust</option>
       <option>Normal Crust</option>
       <option>Cheese Filled Crust</option>
   </select> <br/><br/>

   <select className="bigger">
       <option>Flavour</option>
       <option>Pepperoni</option>
       <option>Chicken-Fajita</option>
       <option>Hawaiian</option>
       <option>Meat Cheese</option>
   </select>  <br/><br/>

   <select className="biggest">
       <option>Size</option>
       <option>Small</option>
       <option>Medium</option>
       <option>Large</option>
   </select><br/><br/><br/>

   <p>  <button  style={{boxShadow:"0 0 30px 0 white"}} className="btn btn-danger" onClick = {() => orderPizza()}>Confirm Your Order Now!</button></p>
   </div>
        </>

    )
}
function  orderPizza(){
    swal({
        title: "THANK YOU!",
        text: "Your order is confirmed!",
        icon: "success",
      });
}

export default PlaceOrder;