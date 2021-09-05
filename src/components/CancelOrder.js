import React from 'react';
import swal from 'sweetalert';

function CancelOrder(){
    return(
        <>
   
        <div id="app-cover">
      <input onClick = {() => cancelOrder()} type="checkbox" id="checkbox"/>
      <div id="bin-icon">
        <div id="lid"></div>
        <div id="box">
          <div id="box-inner">
            <div id="bin-lines"></div>
          </div>
        </div>
      </div>
      <div id="layer"></div>
    </div>
       </>
    
    
    )}
    
    function cancelOrder() {
        swal("Order Cancelled!");
    }

    


export default CancelOrder;