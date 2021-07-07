
import './App.css';
import Covid from './components/covid'
import Store from './store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Provider store={Store}>
       <Covid />
    </Provider>
   
  );
}

export default App;
