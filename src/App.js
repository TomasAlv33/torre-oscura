import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { ItemCount, ItemListContainer } from './Components/ItemListContainer';
import { LibrosList } from './Components/ItemList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-NavBar">
        <NavBar/>
        <ItemListContainer greeting='bienvenido'/>
        <ItemCount/>
        <LibrosList/>
        </div>
       {/*  <img src={logo} className="App-logo" alt="logo" /> */}
        
      </header>
    </div>
  );
}

export default App;
