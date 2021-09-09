import React from 'react';
import swal from 'sweetalert';
import { useState } from 'react';


function PlaceOrder(){
    const [crust, setCrust] = useState('');
    const [flavor,setFlavor] = useState('');
    const [size, setSize] = useState('');
    // const[order,setOrder] = useState([]);

    const onChangeCrust = (event) => {
        setCrust(event.target.value);
      }
    
      const onChangeFlavor = (event) => {
        setFlavor(event.target.value);
      }
    
      const onChangeSize = (event) => {
        setSize(event.target.value);
      }
    
      const handleClick = () => {
        console.log(crust, flavor, size);
        if (crust === "" || flavor === "" || size === "" ) {
            swal({
                title: "Oops",
                text: "Please select the right option!",
                // icon: "success",
              });
        }
        else {
            let pizzaObject = {
              "Flavor": flavor,
              "Crust": crust,
              "Size": size,
              "Table_No": 9,
            }
let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzExNzE5MzIsIm5iZiI6MTYzMTE3MTkzMiwianRpIjoiMDQ0NzA4NzUtMDk2Zi00ZjEzLTkwZDYtNzAyYTM3OTZlNTAwIiwiZXhwIjoxNjMxMTcyODMyLCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.D7W0Esj7Lp0eMBMg-oFqGlDfJqowP68TSH7_CHrBL9U";
  
        const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
              body: JSON.stringify(pizzaObject)
          };
fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
.then(response => { if (response.status === 201) {
swal({
    title: "THANK YOU!",
    text: "Your order is confirmed!",
    icon: "success",
  });
          }
          })}
        }          


    return(
        <>
        <div className="star">
   {/* <label for="crust">Crust:</label>          */}
   <select className="big" name="crust" onChange={onChangeCrust}>
       <option selected>Crust</option>
       <option value = "THIN" >Thin</option>
       <option value ="NORMAL">Normal</option>
       <option value ="CRACKER">Cracker</option>
   </select> <br/><br/>

   {/* <label for="flavor">Flavor:</label> */}
   <select className="bigger" name="flavor" onChange={onChangeFlavor}>
       <option selected>Flavor</option>
       <option value="PEPPERONI" >Pepperoni</option>
       <option value="FAJITA">Fajita</option>
       <option value="CHEESE">Cheese</option>
       <option value="MEAT">Veggie</option>
   </select>  <br/><br/>

   {/* <label for="size">Size:</label> */}
   <select className="biggest"name="size" onChange={onChangeSize}>
       <option selected>Size</option>
       <option value="SMALL" >Small</option>
       <option value="MEDIUM">Medium</option>
       <option value="LARGE">Large</option>
   </select><br/><br/><br/>

   <button  style={{boxShadow:"0 0 30px 0 white"}} className="btn btn-danger" onClick = {handleClick}>Confirm Your Order!</button>
   </div>
        </>

    )
}


export default PlaceOrder;
