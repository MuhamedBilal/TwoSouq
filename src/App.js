import "./App.css";
import Navbar from "./components/Navbar";
import NavbarII from './components/NavbarII'
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Other from "./components/Other";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarII />
      <HeroSection/>
      <Categories/>
      <Other/>
      <Footer/>
    </div>
  );
}

export default App;
