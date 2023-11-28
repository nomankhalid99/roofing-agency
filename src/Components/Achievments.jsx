import React from "react";
import {
  Container,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { MilitaryTech,CheckCircleOutlined,RingVolume,AcUnit,PersonOutlined,WatchLaterOutlined} from "@mui/icons-material";

const Achievments = () => {

    const cardData = [
        {
            icon: <MilitaryTech style={{color:'#001524', fontSize: "45px" }} />,
          iconName: "Quality Material",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti non beatae error.",
        },
        {
            icon: <CheckCircleOutlined style={{color:'#001524', fontSize: "45px" }} />,
          iconName: "Accredited",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti non beatae error.",
        },
        {
            icon: <PersonOutlined style={{color:'#001524', fontSize: "45px" }} />,
          iconName: "Trained Workers",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti non beatae error.",
        },
        {
            icon: <WatchLaterOutlined style={{color:'#001524', fontSize: "45px" }} />,
          iconName: "Time Availability",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti non beatae error.",
        },
        {
            icon: <RingVolume style={{color:'#001524', fontSize: "45px" }} />,
          iconName: "Quick Response",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti non beatae error.",
        },
        {
            icon: <AcUnit style={{color:'#001524', fontSize: "45px" }} />,
          iconName: "1 Year Warranty",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti non beatae error.",
        },
      ];
    

  return (
    <div
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/grungy-white-background-natural-cement-stone-old-texture-as-retro-pattern-wall_1258-28330.jpg?w=900&t=st=1700838266~exp=1700838866~hmac=91a35dfe36ecf0729b44a0636eb3bbb74dcdf599f33244384db6e0d4c9b29e75)",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <Container>
        <Grid container spacing={2} paddingY={12}>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              fontSize={20}
              marginBottom={2}
              fontWeight="bolder"
              color="#BE3144"
            >
              Why Choose Us
            </Typography>
            <Typography variant="h3" marginBottom={4} color='#001524' fontWeight="bolder">
              Six Reasons For People Choosing Us
            </Typography>
          </Grid>
          {cardData.map((card, index) => (
            <Grid item md={4} textAlign="center" xs={12} key={index}>
              <Card style={{ borderRadius: "0", boxShadow: "none" }}>
                <CardContent>
                <IconButton>{card.icon}</IconButton>
                  <Typography variant="h6" fontWeight="bolder" color='#BE3144'>
                    {card.iconName}
                  </Typography>
                  <Typography variant="p" lineHeight={1.7}>{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Achievments;
