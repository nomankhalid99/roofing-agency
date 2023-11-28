import React from "react";
import {
  Button,
  Typography,
  Grid,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Phone } from "@mui/icons-material";
import Header from "./Header";

const Hero = () => {
  const isSmallScreen1 = useMediaQuery("(max-width:767px)");
  const isWideScreen = useMediaQuery("(max-width:924px)");

  return (
    <div style={{ width: "100%" }}>
      <Grid
        container
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/full-shot-roofers-working-with-helmets_23-2149343708.jpg?w=740&t=st=1700578696~exp=1700579296~hmac=878c23d56a7c05bd556a0daf1557e4dcb24501406692cc834c7220513328083a)",
          height: "800px",
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <Header />
        <Container>
          <Grid item md={6}>
            <div
              style={{
                position: isWideScreen ? "absolute" : "static",
                top: isWideScreen ? "25%" : "auto",
                left: isWideScreen ? "5%" : "auto",
                color: "white",
                opacity: 0.9,
              }}
            >
              <Typography
                marginBottom={1}
                fontWeight="bolder"
                variant={isSmallScreen1 ? "h3" : "h2"}
                component="h1"
              >
                We are Commercial Roofing Experts
              </Typography>
              <Typography
                marginBottom={6}
                fontWeight="bold"
                variant="subtitle1"
              >
                Roofing Problem? Call 24Hr Emergency Service
              </Typography>
              <Button
                variant="contained"
                style={{
                  boxShadow: "none",
                  padding: "12px 25px",
                  backgroundColor: "#BE3144",
                }}
              >
                <Phone />
                +1 2345 6789
              </Button>
            </div>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default Hero;
