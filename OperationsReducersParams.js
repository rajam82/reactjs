const reducer = (state = {degree:0,hyperbolic:0}, action) => {
   switch (action.type) {
   case 'sin': return {degree:Math.sin(action.value),hyperbolic:Math.sinh(action.value)}
   case 'cos': return {degree:Math.cos(action.value),hyperbolic:Math.cosh(action.value)}
   case 'tan': return {degree:Math.tan(action.value),hyperbolic:Math.tanh(action.value)}
   case 'cot': return {degree:1/Math.tan(action.value),hyperbolic:1/Math.tanh(action.value)}
   case 'RESET' : return {degree:0,hyperbolic:0} 
   
      default:  
          return state  
   }
}
export default reducer;