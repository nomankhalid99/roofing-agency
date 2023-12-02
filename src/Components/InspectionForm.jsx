import React from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useForm } from "react-hook-form";

const InspectionForm = () => {
  const { register, handleSubmit } = useForm();
  const isWideScreen = useMediaQuery("(max-width:768px)");
  const isWideScreen1 = useMediaQuery("(max-width:1200px)");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container
      style={{ position: isWideScreen ? "static" : "relative", zIndex: 2 }}
    >
      <Grid
        container
        fullWidth
        boxShadow={isWideScreen1 ? 0 : 20}
        borderRadius={isWideScreen1 ? 0 : 3}
        padding={isWideScreen ? '30px 5px' : 5}
        sx={{
          position: isWideScreen ? "static" : "absolute",
          top: isWideScreen ? "auto" : "50%",
          left: isWideScreen ? "auto" : "50%",
          transform: isWideScreen ? "none" : "translate(-50%, -50%)",
          background: "rgb(255, 255, 255)",
          "& .button:hover" : {
            color:'#BE3144 !important', 
            backgroundColor:'transparent !important', 
            outline:"2px solid #BE3144",
            transition: '0.2s all ease-in-out'
          },
        }}
      >
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" fontWeight="bolder" color="#BE3144">
              Quick Service Request
            </Typography>
                <Typography variant="h5" fontWeight="bolder">
                  Send Inspection Request
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <TextField
                className="input"
                  {...register("email")}
                  placeholder="Email"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <TextField
                  {...register("phone")}
                  placeholder="Phone"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <Button
                  type="submit"
                  className="button"
                  style={{
                    boxShadow: "none",
                    padding: "16px 45px",
                    marginTop:"8px",
                    textAlign: "center",
                    backgroundColor:"#BE3144"
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
    </Container>
  );
};

export default InspectionForm;
