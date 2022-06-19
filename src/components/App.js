import '../styles/App.css';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Videos from './Videos';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <div className='main-content'>
            <About />
            <Gallery />
            <Videos />
            <Contact />  
        </div>
        
    </div>
  );
}

export default App;
