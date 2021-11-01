import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/containers/ItemListContainer'
import { ItemDetail } from './components/item/ItemDetail';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="App-NavBar">
            <NavBar />
          </div>
        </header>

        <Switch>
              < Route path='/listaDeLibros'exact  component={ItemListContainer}  />
              < Route path='/item/:id'exact  component={ItemDetailContainer}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
