import React from "react";
import {
  Container,
  Grid,
  Typography,
  Divider,
  IconButton,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import { Google, YouTube } from "@mui/icons-material";

const Tesmonials = () => {
  const cardData = [
    {
      name: "Jeniffer Smith",
      occupation: "CHEF",
      rating: "4",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      avatarSrc:
        "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?w=996&t=st=1700846481~exp=1700847081~hmac=15223c357277fbcff0c41ac330d9fb42410161fb4c185018b630ea738db9a1b5",
    },
    {
      name: "Pamela Duncan",
      occupation: "DIRECTOR",
      rating: "4.5",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      avatarSrc:
        "https://img.freepik.com/free-photo/young-girl-looking-camera_1187-4948.jpg?w=740&t=st=1700846405~exp=1700847005~hmac=c91ce473bf1974cdf787c354d42e7e07376e06c71b75997fc5a8593877427a18",
    },
    {
      name: "Steve Tailor",
      occupation: "CFO",
      rating: "4",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      avatarSrc:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1700846375~exp=1700846975~hmac=70cec5cd463d9c9b6ec2afaccaf16ad3ada76cfc6dfba67d66824aa4c934c395",
    },
  ];

  return (
    <div>
      <Container>
        <Grid container spacing={2} paddingY={10}>
          <Grid item md={4} xs={12}>
            <Typography
              variant="body1"
              fontSize={20}
              marginBottom={2}
              fontWeight="bolder"
              color="#BE3144"
              lineHeight={1.2}
            >
              We Are Business Who Cares, And it Shows
            </Typography>
            <Typography variant="p" marginBottom={4} color="#001524">
              OVER 540 “5 STARS” REVIEWS AND CLIMBING
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item md={4} xs={12}>
            <IconButton>
              <YouTube style={{ color: "#BE3144", fontSize: "100px" }} />
            </IconButton>
            <Typography variant="p" fontWeight="bolder">
              Rate Us on YouTube
            </Typography>
            <Typography variant="p">(248 reviews)</Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item md={3.9} xs={12}>
            <IconButton>
              <Google style={{ color: "#BE3144", fontSize: "100px" }} />
            </IconButton>
            <Typography variant="p" fontWeight="bolder">
              Rate Us on Google
            </Typography>
            <Typography variant="p">(1,248 reviews)</Typography>
          </Grid>
          <Grid item xs={12} paddingY={8} marginTop={10} textAlign="center">
            <Typography
              variant="h3"
              marginBottom={2}
              fontWeight="bolder"
              color="#001524"
            >
              People Say The Nicest Things
            </Typography>
            <Typography variant="p" fontSize={20}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              id veritatis sit,dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
          {cardData.map((card, index) => (
            <Grid item xs={12} textAlign="center" sm={6} md={4} key={index}>
              <Card
                style={{
                    padding:'15px',
                  borderRadius: "0",
                  boxShadow: "0 0 50px #F5F7F8",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{ width: 100, height: 100,marginBottom:'30px' }}
                    src={card.avatarSrc}
                    alt={`Avatar ${index + 1}`}
                  />

                  <Rating
                    style={{ color: "#BE3144" }}
                    value={card.rating}
                    precision={0.5}
                  >
                    {card.rating}
                  </Rating>
                  <Typography
                    marginTop={2}
                    marginBottom={1}
                    variant="h6"
                    fontWeight="bolder"
                    component="p"
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    marginBottom={2}
                    fontWeight="400"
                    fontSize={16}
                    component="p"
                  >
                    {card.occupation}
                  </Typography>
                  <Typography
                    variant="body2"
                    lineHeight={1.8}
                    fontSize={16}
                    component="p"
                  >
                    {card.message}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Tesmonials;
