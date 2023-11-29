import React from "react";
import { Container, Grid, Typography, Link,Divider, IconButton,useMediaQuery } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width:599px)")
  return (
    <footer style={{ backgroundColor: "#132043", color: "#fff", padding: "40px 0" }}>
      <Container>
        <Grid container spacing={3} sx={{
                "& .icons:hover" : {
                  color:'#fff',
                  transition: '0.3s all ease-in-out'
                },
                  "& .links:hover" : {
                    color:'#BE3144', 
                    transition: '0.3s all ease-in-out'
                  },
              }}>
          <Grid item xs={12} textAlign={isSmallScreen ? "center": ""} sm={6}  md={3}>
            <Typography variant="h6" color='#BE3144' fontSize={26} fontWeight='bolder' marginBottom={4} gutterBottom>About</Typography>
            <Typography variant="p" marginBottom={4} paddingRight={isSmallScreen ? 0 : 12} lineHeight={2} paragraph>
            Cras ultricies ligula sed magna dictum porta. Vestibulum ante primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            </Typography>
            <div >
              <Link className="icons" href="#" color="#BE3144" style={{ marginRight: "17px" }}>
                <Facebook />
              </Link>
              <Link className="icons" href="#" color="#BE3144" style={{ marginRight: "17px" }}>
                <Twitter />
              </Link>
              <Link className="icons" href="#" color="#BE3144" style={{ marginRight: "17px" }}>
                <Instagram />
              </Link>
              <Link className="icons" href="#" color="#BE3144">
                <LinkedIn />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign={isSmallScreen ? "center": ""} display='flex' flexDirection='column'>
            <Typography variant="h6"  color='#BE3144' fontSize={26} fontWeight='bolder' marginBottom={4} gutterBottom>Quick Links</Typography>
            <Link className="links" style={{textDecoration:'none'}} href="#" color="inherit" paragraph>
              Privacy Policy
            </Link>
            <Link className="links" style={{textDecoration:'none'}} href="#" color="inherit" paragraph>
            Terms Of Service
            </Link>
            <Link className="links" style={{textDecoration:'none'}} href="#" color="inherit" paragraph>
              Credits
            </Link>
            <Link className="links" style={{textDecoration:'none'}} href="#" color="inherit">
              FAQs
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign={isSmallScreen ? "center": ""}  display='flex' flexDirection='column'>
            <Typography variant="h6"  color='#BE3144' fontSize={26} fontWeight='bolder' marginBottom={4} gutterBottom>Our Services</Typography>
            <Link className="links" style={{textDecoration:'none'}} href="#" color="inherit" paragraph>
            Roof Installation
            </Link>
            <Link className="links" style={{textDecoration:'none'}} href="#" color="inherit" paragraph>
            Roof Repair
            </Link>
            <Link className="links" style={{textDecoration:'none'}} href="#" color="inherit" paragraph>
            Leak Repair
            </Link>
            <Link className="links" style={{textDecoration:'none'}} href="#" color="inherit">
            Window Changing
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign={isSmallScreen ? "center": ""}>
            <Typography variant="h6"  color='#BE3144' fontSize={26} fontWeight='bolder' marginBottom={4} gutterBottom>Free Estimate</Typography>
            <Typography marginBottom={4} variant="h6">
              <IconButton>

              <Phone  style={{ marginRight: "10px",color:'#BE3144',fontSize:"30px" }} />
              </IconButton>
              +1 123-456-7890
            </Typography>
            <Typography variant="p" lineHeight={2} paddingRight={isSmallScreen? 0: 7} paragraph>
            Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis.
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Divider sx={{ backgroundColor: '#fff', margin: '10px 0' }} />
          </Grid>
          <Grid item paddingY={3} xs={12} sm={6}>
            <Typography textAlign={isSmallScreen ? 'center':'start'}>Copyright © 2023 Roofing Agency</Typography>
          </Grid>
          <Grid item paddingY={3} xs={12} sm={6}>
            <Typography textAlign={isSmallScreen ? 'center':'end'}>Powered By React.js and MUI</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
