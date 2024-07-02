
import './App.css';
import { Expertise } from './components/expertise';
import { Footer } from './components/footer';
import { LandingSection } from './components/landing-section';
import { Navbar } from './components/navbar';
import { Service } from './components/service';
import { Specialize } from './components/specialize';


function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div id="home">
        <LandingSection />
      </div>

      <div id="about">
        <Specialize />
      </div>

      <div id="services">
        <Service />
      </div>

      <div>
        <Expertise />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
