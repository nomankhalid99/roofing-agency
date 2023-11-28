import React from "react";
import { Container, Grid, Typography, Button, useMediaQuery, IconButton} from "@mui/material";
import { styled } from "@mui/system";
import { MilitaryTech } from "@mui/icons-material";

const StyledContainer = styled(Container)({
  position: "relative",
});

const About = () => {
    const isWideScreen = useMediaQuery("(max-width:990px)");
    const isWideScreen1 = useMediaQuery("(max-width:1100px)");
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    const isSmallScreen1 = useMediaQuery("(max-width:767px)");
  return (
    <div>
      <StyledContainer>
        <Grid
          container
          marginBottom={isSmallScreen1 ? 5 : 25}
          marginTop={isSmallScreen1 ? 5 : 10}
          paddingY={isSmallScreen1 ? 5 : 12}
          sx={{
            position: "relative",
            "& .firstImage": {
              width: "75%",
              display: "block",
              transition: "transform 0.3s ease-in-out",
            },
            "& .secondImage": {
              position: "absolute",
              top: "470px",
              left: "250px",
              maxWidth: "50%",
              zIndex: 1,
              transition: "transform 0.3s ease-in-out",
            },
            "& .firstImage:hover": {
              transform: "translateY(-10px)",
            },
            "& .secondImage:hover": {
              transform: "translateY(-10px)",
            },
            ...(isWideScreen1 && {
                "& .firstImage": {
                  width: "75%",
                },
                "& .secondImage": {
                    position: "absolute",
                    display:'block',
                    top: "400px",
                    left: "200px",
                    maxWidth: "50%",
                    zIndex: 1,
                },
              }),
            ...(isWideScreen && {
                "& .firstImage": {
                  width: "90%",
                },
                "& .secondImage": {
                  position: "static",
                  width: "90%",
                },
              }),
            ...(isSmallScreen && {
                "& .firstImage": {
                  width: "100%",
                },
                "& .secondImage": {
                  width: "100%",
                  marginBottom:'70px',
                  marginTop:'20px'
                },
              }),
          }}
        >
          <Grid item md={7}>
            <img
              className="firstImage"
              src="https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/photo-hero-15.jpg"
              alt="About-image"
            />
            <img
              className="secondImage"
              src="https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/photo-54.jpeg"
              alt="Second-image"
            />
          </Grid>
          <Grid item md={5}>
            <Typography variant="subtitle1" fontWeight="bolder" color="#BE3144">
              About Company
            </Typography>
            <Typography 
            variant={isSmallScreen1 ? 'h5' : 'h4'} 
            fontWeight="bolder">
              Professional Roofing Contractors
            </Typography>
            <Typography variant="p" lineHeight={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              fugiat sunt quidem error ad aut illum quos est laborum, veritatis
              magni optio ipsa sint architecto, dolores explicabo quibusdam
              numquam necessitatibus deserunt cumque accusamus. Corporis magnam
              dolore eveniet ab, maiores voluptates vero, voluptatem doloribus
              temporibus ipsum maxime sunt quaerat eligendi. Tenetur laboriosam
              sint commodi voluptatum unde, modi molestias aspernatur suscipit
              dolorum illo earum temporibus officia molestiae similique
              reprehenderit ut consequatur nihil accusamus soluta quaerat
              voluptatibus quas rerum!
            </Typography>
            <Typography marginY={5}>
              <IconButton>
              <MilitaryTech style={{fontSize: '35px', marginRight:'20px'}}  htmlColor="#BE3144" /></IconButton>
              <span>Certified Company</span>
            </Typography>

            <Button
              variant="contained"
              style={{ boxShadow: "none", padding: "12px 25px", backgroundColor:"#BE3144" }}
             
            >
              Read More
            </Button>
          </Grid>
        </Grid>
      </StyledContainer>
    </div>
  );
};

export default About;
