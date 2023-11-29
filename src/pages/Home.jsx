import About from "../Components/About";
import Achievments from "../Components/Achievments";
import Consultation from "../Components/Consultation";
import Hero from "../Components/Hero";
import InspectionForm from "../Components/InspectionForm";
import Services from "../Components/Services";
import Statistics from "../Components/Statistics";
import Tesmonials from "../Components/Tesmonials";

function Home() {
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
      </>
    );
  }
  
  export default Home;