import React from 'react';
import {useHistory} from 'react-router';
import Final from './Final';

function Start(){
    let history = useHistory()
    return(
        <>
        
        <center>
        <div className="heading">
							<h1>Feeling Hungry..? Order Now</h1>
	                       </div>
        <div className="btn">
         <button className="btn btn-danger"  onClick={() => history.push('./ViewOrder')}>ViewOrder</button>
         <button className="btn btn-danger"  onClick={() => history.push('./PlaceOrder')}>PlaceOrder</button>
         <button  className="btn btn-danger" onClick={() => history.push('./CancelOrder')}>CancelOrder</button>
         </div>
         </center><br/><br/><br/><br/>
        
         
        
         <Final/>
                            
          
                                          
        </>

    )
}

export default Start;
