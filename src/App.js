import './App.css';
import About from './Components/About';
import Achievments from './Components/Achievments';
import Consultation from './Components/Consultation';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import InspectionForm from './Components/InspectionForm';
import Services from './Components/Services';
import Statistics from './Components/Statistics';
import Tesmonials from './Components/Tesmonials';

function App() {
  return (
    <>
      <Hero/>
      <InspectionForm/>
      <About/>
      <Statistics/>
      <Services/>
      <Achievments/>
      <Tesmonials/>
      <Consultation/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
