import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";

const AboutCompany = () => {
  const isWide = useMediaQuery("(max-width: 1000px)");
  return (
    <div>
      <Container>
        <Grid container sx={{
           "& .button:hover" : {
            color:'#BE3144 !important', 
            backgroundColor:'transparent !important', 
            outline:"2px solid #BE3144",
            transition: '0.2s all ease-in-out'
          },
        }}>
          <Grid
            item
            xs={12}
            marginTop={isWide ? 3 : 12}
            marginBottom={isWide ? 3 : 12}
            sx={{
              "& img": {
                width: "100%",
                height: "auto",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              },
            }}
          >
            <img
              src="https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/about-us-1.jpg"
              alt=""
            />
          </Grid>
          <Grid item md={6} xs={12} paddingRight={5}>
            <Typography
              variant="body1"
              fontSize={20}
              marginBottom={2}
              fontWeight="bolder"
              color="#BE3144"
            >
              About Company
            </Typography>
            <Typography
              variant="h3"
              marginBottom={1}
              color="#001524"
              fontWeight="bolder"
            >
              Professional and Expert Roofing Contractor
            </Typography>
            <Typography variant="subtitle1" fontSize={18} lineHeight={1.8}>
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum
              congue leo eget
            </Typography>
            <Button
              variant="contained"
              className="button"
              style={{
                boxShadow: "none",
                padding: "12px 25px",
                backgroundColor: "#BE3144",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Read More
            </Button>
          </Grid>
          <Grid item md={6} xs={12} paddingBottom={12}>
            <Typography
              variant="subtitle1"
              fontSize={18}
              marginBottom={3}
              lineHeight={1.8}
            >
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum
              congue leo eget malesuada..
            </Typography>
            <Typography variant="subtitle1" fontSize={18} lineHeight={1.8}>
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum
              congue leo eget malesuada..
            </Typography>
            <Grid container>
              <Grid item xs={6} sm={3}>
                <Avatar
                  alt="Avatar Alt Text"
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1700846375~exp=1700846975~hmac=70cec5cd463d9c9b6ec2afaccaf16ad3ada76cfc6dfba67d66824aa4c934c395"
                  sx={{ width: 100, height: 100, marginY: 2 }}
                />
              </Grid>
              <Grid item paddingY={5} xs={6} sm={8}>
                <Typography variant="h6" fontWeight="bolder">
                  Max Stewart
                </Typography>
                <Typography variant="h6">Founder</Typography>
              </Grid>
            </Grid>
            <Typography variant="h6" fontWeight="bolder">
              Need help? Contact me
            </Typography>
            <Typography variant="h6">
              +1 2345 678 or info@example.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutCompany;
