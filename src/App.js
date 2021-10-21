import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { ItemCount, ItemListContainer } from './Components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-NavBar">
        <NavBar/>
        <ItemListContainer greeting='bienvenido'/>
        <ItemCount/>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
