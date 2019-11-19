import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProductListComponent from './components/product/ProductListComponent'
import HeaderComponent from './components/HeaderComponent';

//import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <div>
      <Router>
        <> 
          <HeaderComponent />
          <Switch>
            
          </Switch>
        </>
      </Router>
      
      <ProductListComponent />
    </div>
  );
}

export default App;
