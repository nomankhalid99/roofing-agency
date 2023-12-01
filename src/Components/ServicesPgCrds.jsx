import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

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
  {
    id: 4,
    image:
      "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/metal-roof.jpg",
    title: "Roof Installations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 5,
    image:
      "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/vegetative-roof.jpg",
    title: "Vegetative Roofing​",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 6,
    image:
      "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/metal-roof-1.jpg",
    title: "Specialty Metal​",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const ServicesPgCrds = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2} marginY={2} paddingY={6}>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              fontSize={20}
              marginBottom={1}
              fontWeight="bolder"
              color="#BE3144"
            >
              Our Services
            </Typography>
            <Typography
              variant="h3"
              marginBottom={2}
              color="#001524"
              fontWeight="bolder"
            >
              Trust the Experience
            </Typography>
          </Grid>
          {servicesData.map((service) => (
            <Grid key={service.id} item xs={12} sm={6} md={4}>
              <Card
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(0,0,0,0.1)",
                  padding: "17px",
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
                  <Typography variant="h5" fontWeight="bolder" color="#001524" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="p" fontSize={17} lineHeight={1.8}>{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ServicesPgCrds;
