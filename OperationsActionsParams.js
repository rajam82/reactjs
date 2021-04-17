export function sin(value) {
   return {
      type: 'sin',
      value:value
     
      }
}

export function cos(value) {
   return {
      type: 'cos',
      value:value
   }
}
export function tan(value) {
	   return {
	      type: 'tan',
	      value:value
	   }
	}
	export function cot(value) {
	   return {
	      type: 'cot',
	      value:value
	   }
	}
export function reset() {
   return { type: 'RESET' }
}