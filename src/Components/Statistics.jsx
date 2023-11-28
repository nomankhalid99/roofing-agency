import React from "react";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";

const Statistics = () => {
  const isWideScreen = useMediaQuery("(max-width:768px)");

  return (
    <div>
      <Container
        style={{ position: isWideScreen ? "static" : "relative", zIndex: 2 }}
      >
        <Grid
          container
          style={{
            position: isWideScreen ? "static" : "absolute",
            top: isWideScreen ? "auto" : "50%",
            left: isWideScreen ? "auto" : "50%",
            transform: isWideScreen ? "none" : "translate(-50%, -50%)",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            textAlign="center"
            padding="45px 0px"
            style={{ backgroundColor: "#BE3144", color: "white" }}
          >
            <Typography variant="h3" fontWeight="bolder">
              15+
            </Typography>
            <Typography variant="p">Years In Business</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            textAlign="center"
            padding="45px 0px"
            style={{ backgroundColor: "#FCF5ED" }}
          >
            <Typography variant="h3" fontWeight="bolder">
              1.5k
            </Typography>
            <Typography variant="p">Happy Clients</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            textAlign="center"
            padding="45px 0px"
            style={{ backgroundColor: "#192655", color: "white" }}
          >
            <Typography variant="h3" fontWeight="bolder">
              2.5k
            </Typography>
            <Typography variant="p">Projects Completed</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            textAlign="center"
            padding="45px 0px"
            style={{ backgroundColor: "#BE3144", color: "white" }}
          >
            <Typography variant="h3" fontWeight="bolder">
              150+
            </Typography>
            <Typography variant="p">Trained Staff</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Statistics;
