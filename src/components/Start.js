import React from 'react';
import {useHistory} from 'react-router';


function Start(){
    let history = useHistory()
    return(
        <>
        <center>
        <div className="btn">
         <button className="btn btn-danger"  onClick={() => history.push('./ViewOrder')}>ViewOrder</button>
         <button className="btn btn-danger"  onClick={() => history.push('./PlaceOrder')}>PlaceOrder</button>
         <button  className="btn btn-danger" onClick={() => history.push('./CancelOrder')}>CancelOrder</button>
         </div>
         </center><br/>
        
         
         <div id="pizza" className="hidden-md-down">
							<div className="bord">
								<div className="bord-rand"></div>
									<div className="bord-binnen"></div>
								</div>
								
								<div className="pizzasnede">
									<div className="korst"></div>
									<div className="kaas"></div>
									<div className="salami een vallen"></div>
									<div className="salami-half twee vallen"></div>
									<div className="salami drie vallen"></div>
								</div>
							</div> 
                            
                            
        </>

    )
}

export default Start;