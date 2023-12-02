import React from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useForm } from "react-hook-form";

const ServicesInspection = () => {
  const { register, handleSubmit } = useForm();
    const isSmallScreen = useMediaQuery("(max-width:438px)");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/rood-inspection-min.jpg)",
        backgroundSize: "cover",
        position: "relative",
        width: "100%",
        paddingBottom:"12rem"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
        }}
      ></div>

      <Grid container fullWidth borderRadius={0} padding={2}>
        <Grid
          item
          padding={4}
          marginX={isSmallScreen ? "0px" : "auto"}
          md={6}
          xs={12}
          zIndex={2}
          style={{
            background: "rgb(255, 255, 255)",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} alignItems="center" sx={{
               "& .button:hover" : {
                color:'#BE3144 !important', 
                backgroundColor:'transparent !important', 
                outline:"2px solid #BE3144",
                transition: '0.2s all ease-in-out'
              },
            }}>
              <Grid item textAlign="center" xs={12}>
                <Typography variant="h6" fontWeight="bolder" color="#BE3144">
                  Roof Inspection
                </Typography>
                <Typography variant={isSmallScreen ? "h4":"h3"} color="#001524" marginBottom={2} fontWeight="bolder">
                  Scheduling An Appointment
                </Typography>
                <Typography variant="subtitle1"  fontSize={17} lineHeight={1.8}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={4.5}>
                <TextField
                  {...register("email")}
                  placeholder="Email"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4.5}>
                <TextField
                  {...register("phone")}
                  placeholder="Phone"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Button
                  type="submit"
                  className="button"
                  fullWidth
                  style={{
                    boxShadow: "none",
                    padding: "16px 45px",
                    marginTop:"8px",
                    textAlign: "center",
                    backgroundColor: "#BE3144",
                  }}
                  variant="contained"
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesInspection;
;