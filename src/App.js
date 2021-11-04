import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/containers/ItemListContainer'
import { ItemDetailContainer } from './components/containers/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="App-NavBar">
          <Route path='/' component={NavBar} />
          </div>
        </header>

        <Switch>
              < Route exact path='/'   component={ItemListContainer}  />
              < Route exact path='/item/:id'   component={ItemDetailContainer}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
