import React from "react";
import About from "../Components/About";
import Achievments from "../Components/Achievments";
import Consultation from "../Components/Consultation";
import Hero from "../Components/Hero";
import InspectionForm from "../Components/InspectionForm";
import Services from "../Components/Services";
import Statistics from "../Components/Statistics";
import Tesmonials from "../Components/Tesmonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <InspectionForm />
      <About />
      <Statistics />
      <Services />
      <Achievments />
      <Tesmonials />
      <Consultation />
    </div>
  );
};

export default Home;
