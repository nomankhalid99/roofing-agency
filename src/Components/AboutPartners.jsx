import React from "react";
import { Container, Grid, Typography, Divider, IconButton } from "@mui/material";
import { Album, Apple, BakeryDining, Cyclone } from "@mui/icons-material";

const AboutPartners = () => {
    const icons = [
        {
            icon: <Album style={{color:'#fff', fontSize: "75px" }} />,
        },
        {
            icon: <Apple style={{color:'#fff', fontSize: "75px" }} />,
        },
        {
            icon: <BakeryDining style={{color:'#fff', fontSize: "75px" }} />,
        },
        {
            icon: <Cyclone style={{color:'#fff', fontSize: "75px" }} />,
        },
      ];
  return (
    <div style={{ backgroundColor: "#EB455F" }}>
      <Container>
        <Grid container  paddingY={7}>
          <Grid textAlign="center" item xs={12}>
            <Typography
              variant="body1"
              fontSize={20}
              fontWeight="bolder"
              color="#fff"
            >
              Working With The Best
            </Typography>
            <Typography
              variant="h3"
              marginBottom={5}
              color="#fff"
              fontWeight="bolder"
            >
             Our Partners
            </Typography>
          </Grid>
          {icons.map((icon, index) => (
            <Grid item md={3} sm={6} textAlign="center" xs={12} key={index}>
              <IconButton>{icon.icon}</IconButton>
                <Typography variant="h6" fontWeight="bolder" marginBottom={3} color='#ffff'>
                  LogoLorem
                </Typography>
          </Grid>
          ))}<Divider orientation="vertical" flexItem />
        </Grid>
      </Container>
    </div>
  );
};

export default AboutPartners;
