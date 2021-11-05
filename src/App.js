import './App.css';
import Listing from './components/Listing';
import items from './etsy.json';

function App() {
  return (
    <div className="App">
      <Listing items={items}></Listing>
    </div>
  );
}

export default App;
