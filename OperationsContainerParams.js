import { connect } from 'react-redux'
import Operations from './OperationsParams.js';
import { sin, cos, tan, cot, reset } from './OperationsActionsParams.js';

const mapStateToProps = (state) => {
   return {
      degree: state.degree,
      hyperbolic:state.hyperbolic
   };
};
const mapDispatchToProps = (dispatch,value) => {
   return {
      sin: (value) => dispatch(sin(value)),
      cos: (value) => dispatch(cos(value)),
      tan: (value) => dispatch(tan(value)),
      cot: (value) => dispatch(cot(value)),
      reset: () => dispatch(reset())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Operations);