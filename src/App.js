
import './App.css';
// import Navbar from './Components/Home/Navbar';
import Banners from './Components/Home/Banners';
import Stores from './Components/Home/Stores';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Home/Navbar';




function App() {
  return (
    <>
    <Navbar />
    <Banners />
    {/* <MainSlider /> */}
    <Stores />
    <Footer />
    
    </>
  );
}

export default App;
