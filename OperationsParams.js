import React, { Component } from 'react';
class Operations extends Component {
	ondegrees = (type) => {
		
		var value =30;
		if(document.getElementById("theta") != null){
			value = document.getElementById("theta").value;
		}
		if(type === 'sin'){
		    return this.props.sin(value);
			}else if(type === 'cos'){
		    return this.props.cos(value);
			}else if(type === 'tan'){
		    return this.props.tan(value);
			}else{
		    return this.props.cot(value);
			}
			
	}
	  

   render() {
      const {degree,hyperbolic,sin,cos,tan,cot,reset} = this.props;
      return (
         <div className = "App">
            <div>Degree:{degree}</div><div>Hyperbolic:{hyperbolic}</div>
            <div>
               <button onClick = {()=>this.ondegrees('sin')  }>sin degree</button>

            </div>
            <div>
               <button onClick = {()=>this.ondegrees('cos')}>cos degree</button>
            </div>
            <div>
            <button onClick = {()=>this.ondegrees('tan')}>tan degree</button>
         </div>
         <div>
            <button onClick = {()=>this.ondegrees('cot')}>cot degree</button>
         </div>
            <button onClick = {reset}>RESET</button>
         </div>
      );
   }
}
export default Operations;