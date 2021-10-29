import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar';
import {ItemListContainer} from './Components/ItemListContainer'
import { ItemDetail } from './Components/ItemDetail';
import { ItemDetailContainer } from './Components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-NavBar">
        <NavBar/>
        </div>
       {/*  <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <Router>
            <Switch>
               <Route>
                   <ItemListContainer greeting='Bienvenido a Torre Oscura.' /> 
                 <ItemDetailContainer/>
             </Route>
           </Switch>
      </Router>
    </div>
  );
}

export default App;
