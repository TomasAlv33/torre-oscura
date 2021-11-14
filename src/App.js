import { BrowserRouter as Router, Switch, Route , Redirect } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/containers/ItemListContainer'
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';
import { Cart } from './components/cart/Cart';
import {CartContextProvider} from './components/cart/CartContext'


function App() {
  return (
    <div className="App">
      <CartContextProvider >
      <Router>
        <header>
          <Route  component={NavBar} />
        </header>

        <Switch>
        <Redirect from="/torre-oscura" to="/" />
              < Route exact path='/'   component={ItemListContainer}  />
              < Route exact path='/escritor/:categoria'   component={ItemListContainer}  />
              < Route exact path='/item/:id'   component={ItemDetailContainer}  />
              <Route exact path='/cart' component={Cart}/>
        </Switch>
      </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
