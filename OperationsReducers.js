const reducer = (state = 0, action) => {
   switch (action.type) {
      case 'sin': return 0
      case 'cos': return 1
      case 'tan': return 0
      case 'cot': return 1.732
      case 'RESET' : return 0 
   }
}
export default reducer;