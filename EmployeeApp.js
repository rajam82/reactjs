import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import Employee from './Employee';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function EmployeeApp() {
  return (
		  <Router baseName={process.env.PUBLIC_URL}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        
       
      </header>
      <Switch>
      <Route exact path="/" render={()=>(
      <Redirect to = "/employeelist"/>
    		  
     ) }/>
      		<Route exact path='/employeelist' component={Employee}/>
      </Switch>
    </div>
    </Router>
  );
}

export default EmployeeApp;
