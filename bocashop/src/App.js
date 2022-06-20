
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="row">
        
          <NavBar/>

        
      </header>
      
      
      <ItemListContainer greeting="Boca boca BOCA"/>
      
      
    </div>
  );
}

export default App;
