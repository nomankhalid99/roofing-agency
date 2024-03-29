import React, { useEffect } from "react";
import {Grid, Typography, } from "@mui/material";
import Header from "../Components/Header";
import AboutCompany from "../Components/AboutCompany";
import AboutHistory from "../Components/AboutHistory";
import Footer from "../Components/Footer";
import AboutChoose from "../Components/AboutChoose";
import AboutPartners from "../Components/AboutPartners";

const About = () => {
  useEffect(() => {
    document.title = "About-Roofing Agnecy"
  }, [])
  return (
    <div>
      <Grid
        container
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/flat-design-roof-tile-pattern-illustration_23-2149283193.jpg?w=900&t=st=1701183971~exp=1701184571~hmac=bce94513b1da936e8467955006feeb702e3a838a39fdbab22b1864cfeb3a76ef)",
          height: "400px",
          backgroundSize: "cover",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(11, 0, 42, 0.5)",
          }}
        ></div>
        <Header />
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            color="white"
            style={{ opacity: "0.9" }}
            fontWeight="bolder"
            paddingY={10}
          >
            About Us
          </Typography>
        </Grid>
      </Grid>
      <AboutCompany/>
      <AboutHistory/>
      <AboutChoose/>
      <AboutPartners/>
      <Footer/>
    </div>
  );
};

export default About;
