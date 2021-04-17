import React, { Component } from 'react';
import './App.css';
import Operations from './OperationsContainerParams.js';

class 	OperationsAppParams extends Component {
   render() {
      return (
         <div className = "App">
         <p><input type="text" name="theta" id="theta"/></p>
            <header className = "App-header">
               <Operations/>
            </header>
         </div>
      );
   }
}
export default OperationsAppParams;