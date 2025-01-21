import '../styles/App.css';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import Navbar from './Navbar';
import Reviews from './Reviews';
import Videos from './Videos';

function App() {
  return (
    <div className="App">
        {window.innerWidth > 300 ? <Navbar />: null}
        <Home />
        <div className='main-content'>
            <About />
            <Reviews />
            <Gallery />
            <Videos />
            <Contact />  
        </div>
        
    </div>
  );
}

export default App;
