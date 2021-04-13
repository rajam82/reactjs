import { connect } from 'react-redux'
import Operations from './Operations.js';
import { sin, cos, tan, cot, reset } from './OperationsActions.js';

const mapStateToProps = (state) => {
   return {
      result: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      sin: () => dispatch(sin()),
      cos: () => dispatch(cos()),
      tan: () => dispatch(tan()),
      cot: () => dispatch(cot()),
      reset: () => dispatch(reset())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Operations);