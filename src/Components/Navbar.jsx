import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import {
  Roofing,
  Menu,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

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

  const location = useLocation();
  const currentLocation = location.pathname;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const renderLinks = () => (
    <>
      <Link
        className="links"
        to="/"
        style={{
          ...linkStyle,
          ...(currentLocation === "/" ? { color: "#BE3144" } : {}),
        }}
      >
        Home
      </Link>
      <Link
        className="links"
        to="/about"
        style={{
          ...linkStyle,
          ...(currentLocation === "/about" ? { color: "#BE3144" } : {}),
        }}
      >
        About
      </Link>
      <Link
        className="links"
        to="/services"
        style={{
          ...linkStyle,
          ...(currentLocation === "/services" ? { color: "#BE3144" } : {}),
        }}
      >
        Services
      </Link>
      <Link
        className="links"
        to="/projects"
        style={{
          ...linkStyle,
          ...(currentLocation === "/projects" ? { color: "#BE3144" } : {}),
        }}
      >
        Projects
      </Link>
      <Link
        className="links"
        to="/contact"
        style={{
          ...linkStyle,
          ...(currentLocation === "/contact" ? { color: "#BE3144" } : {}),
        }}
      >
        Contact
      </Link>
    </>
  );

  const linkStyle = {
    textDecoration: "none",
    marginLeft: "30px",
    color: "white",
  };

  const renderSocialLinks = () => (
    <>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com/"
            target="_blank"
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <Instagram />
          </IconButton>
        </>
      ) : null}
    </>
  );

  return (
    <div className="navbar">
      <StyledAppBar isMenuOpen={isMenuOpen}>
        <Toolbar>
          <Container>
            <Grid
              container
              alignItems="center"
              sx={{
                "& .links:hover": {
                  color: "#BE3144 !important",
                  transition: "0.3s all ease-in-out",
                },
                "& .button:hover": {
                  color: "#BE3144 !important",
                  backgroundColor: "transparent !important",
                  outline: "2px solid #BE3144",
                  transition: "0.2s all ease-in-out",
                },
              }}
            >
              <Grid item xs={3}>
                <IconButton>
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
                      style={{
                        boxShadow: "none",
                        padding: "12px 25px",
                        backgroundColor: "#BE3144",
                      }}
                    >
                      Book a Call
                    </Button>
                  </>
                ) : (
                  <IconButton onClick={toggleMenu}>
                    <Menu style={{ color: "#BE3144", fontSize: "34px" }} />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
        {isMobile && isMenuOpen && (
          <List>
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (text) => (
                <Link
                  key={text}
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    ...(text === "Home" && currentLocation === "/" ? { color: "#BE3144" } : {}),
                    ...(text === "About" && currentLocation === "/about" ? { color: "#BE3144" } : {}),
                    ...(text === "Services" && currentLocation === "/services" ? { color: "#BE3144" } : {}),
                    ...(text === "Projects" && currentLocation === "/projects" ? { color: "#BE3144" } : {}),
                    ...(text === "Contact" && currentLocation === "/contact" ? { color: "#BE3144" } : {}),
                  }}
                  onClick={closeMenu}
                >
                  <ListItem button>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              )
            )}
            <Divider />
            <ListItem>{renderSocialLinks()}</ListItem>
            <Button
              variant="contained"
              className="button"
              style={{
                boxShadow: "none",
                padding: "12px 25px",
                margin: "16px",
                backgroundColor: "#BE3144",
              }}
              onClick={closeMenu}
            >
              Book a Call
            </Button>
          </List>
        )}
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
