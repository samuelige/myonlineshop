import './App.css';
import Banner from './assets/Banner/Banner';
import NavBar from './assets/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <div className="Nav-bar-container">
        <NavBar />
      </div>
      <div className="Banner-container">
        <Banner/>
      </div>
    </div>
  );
}

export default App;
