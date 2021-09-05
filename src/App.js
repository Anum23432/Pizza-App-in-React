import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Start from './components/Start';
import ViewOrder from './components/ViewOrder';
import PlaceOrder from './components/PlaceOrder';
import CancelOrder from './components/CancelOrder';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return(
  <>
     <Router>
      <div>
      <div className="indigo">
         <nav>
         <ul>
             <li>
               <Link to="/"style={{color:"wheat",textDecoration:"none"}}>Home</Link>
             </li>
             <li>
               <Link to="/Start"style={{color:"wheat",textDecoration:"none"}}>Start Now</Link>
             </li>
             
           </ul>
         </nav>
         </div>
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

      <div id="final">
      <div className="App">
            <h1>Feeling Hungry!!<br/>Don't Wait!!</h1>
      </div>
     </div>
     

</>
   )};

   export default App;