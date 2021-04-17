import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './OperationsReducersParams.js'
import OperationsAppParams from './OperationsAppParams'
import './index.css';

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__()
)
render(
   <Provider store = {store}>
      <OperationsAppParams />
   </Provider>, document.getElementById('root')
)