import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,Divider
} from "@mui/material";
import { styled } from '@mui/system'; 
import { Roofing, Menu, Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const StyledAppBar = styled(AppBar)(({ theme, isMenuOpen }) => ({
  backgroundColor: isMenuOpen ? "black" : "transparent",
  boxShadow: "none",
  position: "relative",
}));

const useStyles = {
  collapsedAppBar: {
    backgroundColor: "black",
    position: "relative",
  },
};

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 920px)");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const renderLinks = () => (
    <>
      <Link className="links" href="#" underline="none" marginLeft={4} color="inherit">
        Home
      </Link>
      <Link className="links" href="#" underline="none" marginLeft={4} color="inherit">
        About
      </Link>
      <Link className="links" href="#" underline="none" marginLeft={4} color="inherit">
        Services
      </Link>
      <Link className="links" href="#" underline="none" marginLeft={4} color="inherit">
        Projects
      </Link>
      <Link className="links" href="#" underline="none" marginLeft={4} color="inherit">
        Contact
      </Link>
    </>
  );

  const renderSocialLinks = () => (
    <>
      {isMobile ? (
        <>
          <IconButton color="inherit" href="https://www.facebook.com/" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com/" target="_blank">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/" target="_blank">
            <LinkedIn />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com/" target="_blank">
            <Instagram />
          </IconButton>
        </>
      ) : null}
    </>
  );

  return (
    <StyledAppBar isMenuOpen={isMenuOpen}>
      <Toolbar>
        <Container>
          <Grid container alignItems="center" sx={{
                "& .links:hover" : {
                  color:'#BE3144', 
                  transition: '0.3s all ease-in-out'
                },
                }} >
            <Grid item xs={3}>
              <IconButton onClick={toggleMenu}>
                <Roofing style={{ fontSize: "60px", color: "#BE3144" }} />
              </IconButton>
            </Grid>
            <Grid item xs={6} fontSize={16} textAlign="center">
              {!isMobile && renderLinks()}
            </Grid>
            <Grid item xs={3} textAlign="right">
              {!isMobile ? (
                <>
                  {renderSocialLinks()}
                  <Button
                    className="button"
                    variant="contained"
                    style={{ boxShadow: "none", padding: "12px 25px", backgroundColor:"#BE3144" }}
                  >
                    Book a Call
                  </Button>
                </>
              ) : (
                <IconButton onClick={toggleMenu}>
                  <Menu style={{color:"#BE3144", fontSize:'34px'}}/>
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
      {isMobile && isMenuOpen && (
        <List>
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((text) => (
            <ListItem button key={text} onClick={closeMenu}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <Divider />
          <ListItem>
            {renderSocialLinks()}
          </ListItem>
          <Button
            variant="contained"
            style={{ boxShadow: "none", padding: "12px 25px", margin: '16px' }}
            color="error"
            onClick={closeMenu}
          >
            Book a Call
          </Button>
        </List>
      )}
    </StyledAppBar>
  );
};

export default Navbar;