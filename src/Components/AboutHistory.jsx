import React from "react";
import { Container, Grid, Typography,Button,useMediaQuery } from "@mui/material";

const AboutHistory = () => {
  const isWide = useMediaQuery("(max-width: 900px)")

  return (
    <div style={{ backgroundColor: "#132043" }}>
      <Container>
        <Grid container paddingY={12} spacing={2}>
          <Grid item textAlign="center" xs={12}>
            <Typography
              variant="body1"
              fontSize={20}
              fontWeight="bolder"
              color="#BE3144"
            >
              Our History
            </Typography>
            <Typography
              variant="h3"
              marginBottom={5}
              color="white"
              fontWeight="bolder"
            >
              Superior Roofing Services
            </Typography>
          </Grid>
          <Grid item md={3} sm={6} xs={12} sx={{
              "& img": {
                width: "100%",
                height: "auto",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              },
            }}> <img
            src="https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/about-us-12.jpg"
            alt=""
          /></Grid>
          <Grid item md={3} sm={6} xs={12} sx={{
              "& img": {
                width: "100%",
                height: "auto",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              },
            }}><img
              src="https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/about-us-11.jpg"
              alt=""
            /></Grid>
          <Grid item md={6}>
          <Typography
              variant="body1"
              fontSize={20}
              fontWeight="bolder"
              color="#BE3144"
              paddingLeft={isWide ? 0 : 6}
            >
              1993-2017
            </Typography>
            <Typography
              variant="h5"
              marginBottom={3}
              color="white"
              fontWeight="bolder"
              paddingLeft={isWide ? 0 : 6}
            >
              Our Most Efficient Year
            </Typography>
            <Typography variant="subtitle1" color='white' paddingLeft={isWide ? 0 : 6} fontSize={18} lineHeight={1.8}>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Nulla porttitor accumsan tincidunt. Donec
                rutrum congue leo eget malesuada..
              </Typography>
              <Button
                variant="contained"
                style={{
                  boxShadow: "none",
                  padding: "12px 25px",
                  backgroundColor: "#BE3144",
                  marginTop: "30px",
                  marginLeft: isWide ? '0px' : '45px'
                }}
              >
                Read More
              </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutHistory;
