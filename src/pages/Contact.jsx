/* global google */
/* eslint-disable no-undef */

import React, { useEffect } from "react";
import { Button, Container, Grid, TextField, Typography,Card, CardContent, IconButton, useMediaQuery } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
import {Phone, Mail, NearMe} from '@mui/icons-material'

const contactData = [
    {
      id: 1,
      title: "Main Office",
      icon: <NearMe style={{color:'#BE3144', fontSize: "30px" }} />,
      info:"San Francisco, CA",
      additionalInfo: "20 Reynolds Neck Str-50121"
    },
    {
      id: 2,
      title: "Make a call",
      icon: <Phone style={{color:'#BE3144', fontSize: "30px" }} />,
      info:"+123456 789",
      additionalInfo: "Mon - Sat: 09am - 08pm"
    },
    {
      id: 3,
      title: "Send a Mail",
      icon: <Mail style={{color:'#BE3144', fontSize: "30px" }} />,
      info:"info@example.com",
      additionalInfo: "info@example.com"
    },
  ];
  

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const isWideScreen = useMediaQuery("(max-width:900px")
  const isSmallScreen = useMediaQuery("(max-width:445px")

  const onSubmit = (data) => {
    console.log(data);
  };


  useEffect(() => {
    document.title = "Contact-Roofing Agnecy"
  }, [])

  useEffect(() => {
    if (typeof google === "object" && typeof google.maps === "object") {
      const mapOption = {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 14,
      };

      const map = new google.maps.Map(
        document.getElementById("google-map"),
        mapOption
      );
      new google.maps.Marker({
        position: mapOption.center,
        map,
        title: "",
      });
    }
  }, []);

  return (
    <div>
      <Grid
        container
        sx={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/flat-design-roof-tile-pattern-illustration_23-2149283193.jpg?w=900&t=st=1701183971~exp=1701184571~hmac=bce94513b1da936e8467955006feeb702e3a838a39fdbab22b1864cfeb3a76ef)",
          height: "400px",
          backgroundSize: "cover",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(11, 0, 42, 0.5)",
          }}
        ></div>
        <Header />
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            color="white"
            style={{ opacity: "0.9" }}
            fontWeight="bolder"
            paddingY={10}
          >
            Contact Us
          </Typography>
        </Grid>
      </Grid>
      <Container>
        <Grid container paddingY={11} sx={{
          "& .button:hover" : {
            color:'#BE3144 !important', 
            backgroundColor:'transparent !important', 
            outline:"2px solid #BE3144",
            transition: '0.2s all ease-in-out'
          },
        }}>
          <Grid
            item
            md={6}
            marginBottom={3}
            paddingRight={isWideScreen ? 0:  7}
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
              src="https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/contact-us-1.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                backgroundColor: "white",
                padding:isSmallScreen ? "0px" : "35px",
              }}
            >
              <Typography
                variant="body1"
                fontSize={20}
                marginBottom={1}
                fontWeight="bolder"
                color="#BE3144"
              >
                Get In Touch
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bolder"
                color="#001524"
                marginBottom={1}
              >
                Any Question?
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bolder"
                color="#001524"
                marginBottom={1}
              >
                Write Down And Send Us
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
                className="button"
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
        <Grid container spacing={2} paddingBottom={12}>
            {contactData.map((contact) => (
                <Grid item md={4} sm={6} xs={12}>
                    <Card  style={{ borderRadius: "0",boxShadow: "0 0 50px #EEF5FF"}}>
                        <CardContent style={{position:"relative"}}>
                            <div style={{height:'1px', width:'30px', backgroundColor:'#BE3144', position:"absolute", top:"30px"}}></div>
                            <Typography variant="h5" fontWeight='bolder' marginLeft={6} marginBottom={4}>{contact.title}</Typography>
                            <IconButton>{contact.icon}</IconButton>
                            <Typography variant="p" fontWeight='bolder' fontSize={18}>{contact.info}</Typography>
                            <Typography variant="subtitle1" marginLeft={6}>{contact.additionalInfo}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
      </Container>
        <div id="google-map" style={{ height: "500px", width: "100%", marginBottom:"90px" }}></div>
      <Footer />
    </div>
  );
};

export default Contact;
