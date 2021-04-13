import React, { Component } from 'react';
import './App.css';
import Operations from './OperationsContainer.js';

class 	OperationsApp extends Component {
   render() {
      return (
         <div className = "App">
            <header className = "App-header">
               <Operations/>
            </header>
         </div>
      );
   }
}
export default OperationsApp;