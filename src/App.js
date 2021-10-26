import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';
import ItemList from "./Components/ItemList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-NavBar">
        <NavBar/>
        <ItemListContainer greeting='bienvenido'/>
        <ItemList />
        </div>
       {/*  <img src={logo} className="App-logo" alt="logo" /> */}
        
      </header>
    </div>
  );
}

export default App;
