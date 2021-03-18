import './App.css';
import Banner from './assets/Banner/Banner';
import { GotCovered, GotCoveredImage } from './assets/GotCovered/GotCovered';
import NavBar from './assets/Navbar/NavBar';
import Plans from './assets/Plans/Plans';

function App() {
  return (
    <div className="App">
      <div className="Nav-bar-container">
        <NavBar />
      </div>
      <div className="Banner-container">
        <Banner/>
      </div>
      <div className="got-covered-container">
        <div className="covered"><GotCovered /></div>
        <div className="coverImage"><GotCoveredImage /></div>
      </div>
      <div className="plans-container">
        <Plans />
      </div>
    </div>
  );
}

export default App;
