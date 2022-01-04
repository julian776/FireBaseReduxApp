import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore';
import ListarCitas from './components/ListarCitas'


const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <ListarCitas />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
