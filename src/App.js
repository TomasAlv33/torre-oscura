import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/containers/ItemListContainer'
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';
import { Cart } from './components/cart/Cart';


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Route path='/' component={NavBar} />
        </header>

        <Switch>
              < Route exact path='/'   component={ItemListContainer}  />
              < Route exact path='/item/:id'   component={ItemDetailContainer}  />
              <Route exact path='/cart' component={Cart}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
