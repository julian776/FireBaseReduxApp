import { Provider, connect } from 'react-redux';
import './App.css';
import ListarCitas from './components/ListarCitas';
import {store} from "./store"

function App() {
  return (
    <Provider store={store}>
    <ListarCitas />
    </Provider>
  );
}

export default App;
