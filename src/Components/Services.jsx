import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,useMediaQuery
} from "@mui/material";
import { ArrowCircleRight } from "@mui/icons-material";

const texts = [
  "Stucco",
  "Window Replacement",
  "Skylights & Sun Tunnels",
  "Chimney Spark Arrestor",
  "Interior Sheetrock Repair",
];

const servicesData = [
  {
    id: 1,
    image:
      "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/services-1.jpg",
    title: "Roof Installations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 2,
    image:
      "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/services-2.png",
    title: "Roof Repair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 3,
    image:
      "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/service-3-.png",
    title: "Leak Repair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const Services = () => {
  const isWideScreen = useMediaQuery("(max-width:768px)");

  return (
    <div style={{ backgroundColor: "#212121" }}>
      <Container>
        <Grid container spacing={3} marginTop={isWideScreen ? 8:  27} paddingY={15}
        sx={{
          "& .button:hover" : {
            color:'#BE3144 !important', 
            backgroundColor:'transparent !important', 
            outline:"2px solid #BE3144",
            transition: '0.2s all ease-in-out'
          },
        }}>
          <Grid item textAlign="center" xs={12}>
            <Typography
              variant="body1"
              fontSize={20}
              fontWeight="bolder"
              color="#BE3144"
            >
              Services
            </Typography>
            <Typography
              variant="h3"
              marginBottom={5}
              color="white"
              fontWeight="bolder"
            >
              We Provide Superior Roofing Services
            </Typography>
          </Grid>
          {servicesData.map((service) => (
            <Grid key={service.id} item xs={12} sm={6} md={4}>
              <Card
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bolder" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="p">{service.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          <Grid item md={7} marginTop={14}>
            <Typography
              variant="body1"
              fontSize={20}
              marginBottom={2}
              fontWeight="bolder"
              color="#BE3144"
            >
              Additional Services
            </Typography>
            <Typography
              variant="h3"
              marginBottom={1}
              color="white"
              fontWeight="bolder"
            >
              We Also Offer
            </Typography>
            <Typography variant="p" lineHeight={2} color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              minima provident ea voluptatibus, quibusdam optio quasi similique
              ullam corrupti, dolores obcaecati impedit? Laboriosam, aspernatur
              nemo eaque eos libero eveniet neque?
            </Typography>
            <List>
              {texts.map((text, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <ArrowCircleRight htmlColor="white" />
                  </ListItemIcon>
                  <ListItemText style={{ color: "white" }} primary={text} />
                </ListItem>
              ))}
            </List>
            <Button
              variant="contained"
              className="button"
              style={{
                boxShadow: "none",
                padding: "12px 25px",
                backgroundColor: "#BE3144",
                marginTop: "30px",
              }}
            >
              Know More
            </Button>
          </Grid>
          <Grid
            item
            md={5}
            marginTop={10}
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
              src="https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/services-11.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
