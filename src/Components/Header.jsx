import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Divider,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Navbar from "./Navbar";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 920px)");
  return (
    <div style={{ width: "100%" }}>
      
      <AppBar
        style={{
          zIndex: 23,
          backgroundColor: "transparent",
          boxShadow: "none",
          position: "unset",
        }}
      >
        {isMobile ? null : (
                <>
        <Toolbar>
          <Container>
            <Grid
              container
              spacing={2}
              padding={0}
              margin={0}
              alignItems="center"
              sx={{
                "& .icons:hover" : {
                  color:'#BE3144',
                  transition: '0.3s all ease-in-out'
                }
              }}
            >
              
                  <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1" fontSize={14}>
                      {" "}
                      +(1) 2345 6789
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} textAlign="center">
                    <Typography fontSize={14}>
                      11001 14th Street Ave, San Francisco, CA .
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} textAlign="right">
                    <IconButton
                    className="icons"
                      color="inherit"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <Facebook />
                    </IconButton>
                    <IconButton
                    className="icons"
                      color="inherit"
                      href="https://twitter.com/"
                      target="_blank"
                    >
                      <Twitter />
                    </IconButton>
                    <IconButton
                    className="icons"
                      color="inherit"
                      href="https://www.linkedin.com/"
                      target="_blank"
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                    className="icons"
                      color="inherit"
                      href="https://www.instagram.com/"
                      target="_blank"
                    >
                      <Instagram />
                    </IconButton>
                  </Grid>
               
            </Grid>
          </Container>
        </Toolbar>
        <Divider style={{ backgroundColor: "white" }} />
        </>
              )}
        <Navbar />
      </AppBar>
      
    </div>
  );
};

export default Header;
