import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,useMediaQuery
  } from "@mui/material";
  import React from "react";
  
  const projectsData = [
    {
      id: 1,
      image:
        "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/1.jpg",
      title: "Low Rise Building",
      status:
        "Commercial",
    },
    {
      id: 2,
      image:
        "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/2.jpg",
      title: "Winter Maintenance",
      status:
        "Residential",
    },
    {
      id: 3,
      image:
        "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/3.jpg",
      title: "Solar Roof",
      status:
        "Commercial",
    },
    {
      id: 4,
      image:
        "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/4.jpg",
      title: "Solar Roof",
      status:
        "Residential",
    },
    {
      id: 5,
      image:
        "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/5.jpg",
      title: "Traditional Style Pattern",
      status:
        "Residential",
    },
    {
      id: 6,
      image:
        "https://websitedemos.net/roofing-agency-02/wp-content/uploads/sites/883/2021/06/6.jpg",
      title: "Modern Style Pattern​",
      status:
        "Residential",
    },
  ];
  
  const ProjectsCards = () => {
    const isSmallScreen = useMediaQuery("(max-width:600px)")
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
                Our Projects
              </Typography>
              <Typography
                variant="h3"
                marginBottom={2}
                color="#001524"
                fontWeight="bolder"
              >
                Inspiration for Your Next Project
              </Typography>
            </Grid>
            {projectsData.map((project, index) => (
              <Grid key={project.id} item xs={12} sm={6} md={4}  style={{ marginTop:isSmallScreen ? "" : `${index * 20}px` }}>
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
                    height="400"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5" fontWeight="bolder" color="#001524" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="p" fontSize={17} lineHeight={1.8}>{project.status}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  };
  
  export default ProjectsCards;
  