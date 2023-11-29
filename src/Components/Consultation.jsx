import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

const Consultation = () => {
  const isWideScreen = useMediaQuery("(max-width:924px)");
  const isMediumScreen = useMediaQuery("(max-width:768px)");
  const isSmallScreen = useMediaQuery("(max-width:466px)");
  const isVerySmallScreen = useMediaQuery("(max-width:356px)");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const backgroundStyle = {
    background:
      "url('https://img.freepik.com/free-photo/blue-print-with-yellow-repair-kit_23-2148393176.jpg?w=996&t=st=1700922261~exp=1700922861~hmac=848f36de742316ce68e376ea9cee913ba9c05b9972a4d5e32c6907db364b96de')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: isWideScreen ? "380px" : isMediumScreen ? "350px" : "325px",
    backgroundAttachment: "fixed",
  };

  return (
    <div style={backgroundStyle}>
      <Grid container>
        <Grid
          item
          paddingTop={isSmallScreen ? 8.7 : isVerySmallScreen ? 3 :  12}
          paddingBottom={isSmallScreen ? 8.3 : isVerySmallScreen ? 4 : 12}
          style={{ backgroundColor: "rgba(11, 0, 42, 0.5)" }}
          textAlign="center"
          xs={12}
        >
          <Typography
            variant="body1"
            fontSize={20}
            marginBottom={2}
            fontWeight="bolder"
            color="#BE3144"
          >
            Don't Know What To Start With?
          </Typography>
          <Typography
            variant="h3"
            marginBottom={isVerySmallScreen ? 0 : 4}
            color="white"
            fontWeight="bolder"
          >
            Get A Solutions For All Roofing Services
          </Typography>
        </Grid>
      </Grid>
      <Container>
        <Grid
          container
          style={{ position: isWideScreen ? "static" : "relative", }}
          paddingTop={isWideScreen ? 4 : 12}
          paddingBottom={isWideScreen ? 6 : 28}
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={12} md={6} paddingRight={isWideScreen ? 0 : 12}>
            <Typography
              variant="body1"
              fontSize={20}
              marginBottom={1}
              fontWeight="bolder"
              color="#BE3144"
            >
              Offices
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bolder"
              color="#001524"
              marginBottom={1}
            >
              Head office
            </Typography>
            <Typography variant="body1" lineHeight={1.8} marginBottom={3}>
              Cras ultricies ligula sed magna dictum porta. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae.
            </Typography>
            <Divider />
            <Typography variant="body1" marginY={2}>
              11001 14th Street Ave, San Francisco, CA
            </Typography>
            <Typography variant="body1" marginBottom={2}>
              Phone: +(1) 2345 6789
            </Typography>
            <Typography variant="body1" marginBottom={3}>
              Email: info@example.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                backgroundColor: "white",
                padding: isWideScreen ? "0px" : "35px",
                position: isWideScreen ? "static" : "absolute",
                top: isWideScreen ? "auto" : "50%",
                left: isWideScreen ? "auto" : "50%",
                transform: isWideScreen ? "none" : "translate(-0%, -67%)",
              }}
            >
              <Typography
                variant="body1"
                fontSize={20}
                marginBottom={1}
                fontWeight="bolder"
                color="#BE3144"
              >
                Free Consultation
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bolder"
                color="#001524"
                marginBottom={1}
              >
                Get A Free Quote
              </Typography>
              <TextField
                {...register("name")}
                placeholder="Your full name"
                fullWidth
                margin="dense"
                required
              />
              <TextField
                {...register("number")}
                placeholder="Phone Number"
                fullWidth
                margin="dense"
                required
              />
              <TextField
                {...register("email")}
                placeholder="Your Email"
                fullWidth
                margin="dense"
                required
              />
              <TextField
                {...register("service")}
                placeholder="Service description"
                fullWidth
                margin="dense"
              />
              <TextField
                {...register("message")}
                placeholder="Message"
                fullWidth
                multiline
                rows={4}
                margin="dense"
                required
              />
              <Button
                type="submit"
                variant="contained"
                style={{
                  boxShadow: "none",
                  padding: "12px 25px",
                  backgroundColor: "#BE3144",
                  marginTop: "10px",
                }}
              >
                Get a Free Quote
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Consultation;
