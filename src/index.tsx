import { StrictMode } from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'
import './index.css'
import App from './App'

export const store = createStore(rootReducer)

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
