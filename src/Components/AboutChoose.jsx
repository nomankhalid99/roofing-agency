import React from 'react'
import {
    Container,
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    IconButton,
    Typography,
  } from "@mui/material";
  import {Security,HighQuality,CheckCircleOutlined} from "@mui/icons-material";

const AboutChoose = () => {
    const cardData = [
        {
            icon: <CheckCircleOutlined style={{color:'#001524', fontSize: "45px" }} />,
          iconName: "Accredited Company",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti non beatae error.",
        },
        {
            icon: <Security style={{color:'#001524', fontSize: "45px" }} />,
          iconName: "100% Guarantee",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti non beatae error.",
        },
        {
            icon: <HighQuality style={{color:'#001524', fontSize: "45px" }} />,
          iconName: "Quality Material",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti non beatae error.",
        },
      ];
  return (
    <div>
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
            Reason For Choosing Us
            </Typography>
          </Grid>
          {cardData.map((card, index) => (
            <Grid item md={4} sm={6} textAlign="center" xs={12} key={index}>
              <Card  style={{ borderRadius: "0", padding:'30px',boxShadow: "0 0 50px #EEF5FF"}}>
                <CardContent>
                <IconButton>{card.icon}</IconButton>
                  <Typography variant="h6" fontWeight="bolder" color='#BE3144'>
                    {card.iconName}
                  </Typography>
                  <Typography variant="p" lineHeight={1.7}>{card.description}</Typography>
                </CardContent>
                <CardActions>
                <Button
                    size="small"
                    style={{ color: "#BE3144",margin: 'auto'}}
                  >
                    Know More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default AboutChoose