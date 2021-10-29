import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './Start';
import ViewOrder from './ViewOrder';
import PlaceOrder from './PlaceOrder';
import CancelOrder from './CancelOrder';
import { FaHome } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Routes() {
  return(
  <>
     <Router>
      <div>
      
         
         <ul>
             
             <li>
               <Link to="/Start"style={{color:"wheat",textDecoration:"none"}} ><FaHome size={40} className="home"/></Link>
             </li>
             
           </ul>
         
         {/* </div> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
         
           <Route path="/Start">
             <Start />
           </Route>
           <Route path="/ViewOrder">
             <ViewOrder />
            </Route>
            <Route path="/PlaceOrder">
              <PlaceOrder/>
            </Route>
            <Route path="/CancelOrder">
             <CancelOrder />
            </Route>
           
         </Switch>
       </div>
     </Router>

     
     

</>
   )};

   export default Routes;