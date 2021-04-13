import React, { Component } from 'react';
class Operations extends Component {
   render() {
      const {result,sin,cos,tan,cot,reset} = this.props;
      return (
         <div className = "App">
            <div>{result}</div>
            <div>
               <button onClick = {sin}>sin 30</button>
            </div>
            <div>
               <button onClick = {cos}>cos 30</button>
            </div>
            <div>
            <button onClick = {tan}>tan 30</button>
         </div>
         <div>
            <button onClick = {cot}>cot 30</button>
         </div>
            <button onClick = {reset}>RESET</button>
         </div>
      );
   }
}
export default Operations;