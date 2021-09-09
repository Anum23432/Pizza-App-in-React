import swal from 'sweetalert';
import React, {useEffect, useState} from 'react';

function CancelOrder() {
  const [orders,setOrders] = useState([]);
  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
        .then(response => response.json())
        .then(data => setOrders(data))
    },
 []);

 const onClickCancel = (Order_ID) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    fetch(`https://order-pizza-api.herokuapp.com/api/orders/${Order_ID}`, requestOptions)
    .then(response => {
        if (response.status === 200) {
            swal('Cancelled successfully')
        }
        window.location.reload();
    })
 }

  return (
    <>
    <div>{orders.map((v,i) => {
      return <div key={i}>
      <div class="card mb-3 mx-auto" style={{width: '200px', margin: '45px', padding:'15px',height:'200px', backgroundColor:'wheat'}}>
      <div class="row g-0" >
      <div class="col-md-8">
      <div className="card-body">
        <div className='card-title'>Crust: {v.Crust} </div>
        <div className='card-subtitle'>Flavor: {v.Flavor} </div>
        <div className='card-text'>Size: {v.Size} </div>
        <button className="btn btn-danger" style={{marginLeft:'5%'}} onClick={() => onClickCancel(v.Order_ID)}>CancelOrder</button>
      </div>
      </div>
      </div>
      </div>
                <br />
                <br />
             </div>})}
    </div>
    
    </>
  );
}


export default CancelOrder;
