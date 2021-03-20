import './App.css';
import Banner from './assets/Banner/Banner';
import { Comments, CommentsImage } from './assets/Comments/Comments';
import { GotCovered, GotCoveredImage } from './assets/GotCovered/GotCovered';
import Growth from './assets/Growth/Growth';

import NavBar from './assets/Navbar/NavBar';
import Offers from './assets/Offers/Offers';
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
      <div className="Offer-container">
        <Offers />
      </div>
      <section className="section">
        <div className="comments-container got-covered-container">
          <div className="comT covered"><Comments /></div>
          <div className="commentImage coverImage"><CommentsImage /></div>
        </div>
        <div className="growth-container">
          <Growth />
        </div>
      </section>
      
    
      
    </div>
  );
}

export default App;
