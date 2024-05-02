import React from 'react';

import { Box, Typography, Grid, Container } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function AboutConsultancy() {
  return (
    <>
    <Container>
      <Grid container >
        <Grid
          item
          xl={6}
          md={8}
          xs={12}

          sx={{

            fontFamily: "Poppins",
          
            marginTop: { xs: '1rem', md: '3rem', xl: '5rem' }

          }}
        >
          <item>
            <Box className="textbox">
              <Typography style={{ color: "red", fontWeight: "600", fontSize: "12px", fontFamily: "poppins",letterspacing: "0.18em" }}>
                ABOUT CONSULTANCY
              </Typography>
              <Typography variant="h2" style={{

                fontSize: "36px",
                fontWeight: "700",
                fontFamily: "poppins",
                marginTop: "1rem",
                paddingRight: "5rem"
              }}>
                We Work With You To Address Your Most Critical Business Priorities
              </Typography>
              <Typography style={{


                fontFamily: 'poppins', color: "#687076", fontSize: "14px", paddingRight: "3rem", marginTop: "25px"
              }}>
                To obtain higher performance, Our leaders first identify the critical obstacles to forward progress and then develop a coherent approach to overcoming them. We define your company mission and prioritize company objectives.
                <a href="#" style={{ color: "red" }}>Read More</a>
              </Typography>

            </Box>
            <Grid container  sx={{ marginTop: "50px" }}>
              <Grid item xl={6} >
                <ul >
                  <li style={{ display: "flex", alignItems: "center", listStyle: "none", marginBottom: "15px", color: "#687076", fontSize: "14px", fontFamily: "poppins" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px", marginRight: '15px' }}></ArrowCircleRightIcon>Acquire live chat enables sales </li>
                  <li style={{ display: "flex", alignItems: "center", listStyle: "none", marginBottom: "15px", color: "#687076", fontSize: "14px", fontFamily: "poppins" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px", marginRight: '15px' }}></ArrowCircleRightIcon>Engage - marketing automation</li>
                  <li style={{ display: "flex", alignItems: "center", listStyle: "none", marginBottom: "15px", color: "#687076", fontSize: "14px", fontFamily: "poppins" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px", marginRight: '15px' }}></ArrowCircleRightIcon>Acquire live chat enables sales</li>
                </ul>
              </Grid>
              <Grid item xl={6}>
                <ul>
                  <li style={{ display: "flex", alignItems: "center", listStyle: "none", marginBottom: "15px", color: "#687076", fontSize: "14px", fontFamily: "poppins" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px", marginRight: '15px' }}></ArrowCircleRightIcon>Learn from customer feedback</li>
                  <li style={{ display: "flex", alignItems: "center", listStyle: "none", marginBottom: "15px", color: "#687076", fontSize: "14px", fontFamily: "poppins" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px", marginRight: '15px' }}></ArrowCircleRightIcon>Support -customer support</li>
                  <li style={{ display: "flex", alignItems: "center", listStyle: "none", marginBottom: "15px", color: "#687076", fontSize: "14px", fontFamily: "poppins" }}><ArrowCircleRightIcon sx={{ color: "red", fontSize: "18px", marginRight: '15px' }}></ArrowCircleRightIcon>Learn from customer feedback</li>
                </ul>
              </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ marginTop: { xl: "1rem", md: "3px", xs: "2px" } }}>
              <Grid item xl={7}>
                <item>

                  <Box sx={{ display: "flex" }}><img src="/public/Images/about-sign.png" alt="sign" style={{ height: "80px", width: "100px" }} />
                    <Box sx={{marginLeft:"15px"}}>
                      <Typography variant='h5' style={{ fontWeight: "700", fontFamily: "poppins" }}> Giri Lankipalle</Typography>
                      <Typography style={{ fontSize: "12px", color: "#687076", fontFamily: "poppins" }}>Financial Professional</Typography>
                    </Box>
                  </Box>

                </item>
              </Grid>

              <Grid item xl={5}>
                <item>
                  <Typography variant='h5' style={{ fontWeight: "700", fontFamily: "poppins" }}>201 606 3949</Typography>
                  <Typography style={{ fontSize: "14px", color: "#687076", fontFamily: "poppins" }}>Call for any questions.</Typography>
                </item>
              </Grid>

            </Grid>
          </item>
        </Grid>
        {/* ------------second grid -------------------------------------*/}
        <Grid item xl={6} md={4} xs={12}
         >
          <Box sx={{height:{xl:"660px",xs:"600px"},width:{xl:"530px",xs:"400px"},
             border: "1.5px solid rgb(232, 236, 239) ", backgroundColor: "white", marginTop: "5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position:"relative"

          }}
          >
            <Box>
              <Box>
                <img src="/public/Images/single-img-one.jpg" alt="single-img-one.jpg"/>
              </Box>
              <Box sx={{ height: "50px", width: "150px", display: "flex",alignItems:"center",
              position: "absolute",top:{xl:"12px",xs:'0px'},left:{xl:"360px",md:"300px",xs:"200px"},
               textAlign: "center", backgroundColor: "red" }}>
                <Grid container>
                  <Grid item xl={3}> <a href="#">
                    <img src="/public/Images/ttm-playicon-30x30.png" alt="video-play-icon" />
                  </a></Grid>
                  <Grid item xl={9}><Typography variant="h5" color="white"style={{fontSize:'18px',fontFamily:"poppins", fontWeight:"500"}}>Play Video</Typography></Grid>

                </Grid>

              </Box>
            </Box>

          </Box>
        </Grid>


      </Grid>
      </Container>
    </>
  );
}

//
// Worry Free – No cost consultation
// Personalized and detailed analysis
// Insightful and customized solutions
// Low-cost start-up opportunity
// Worldclass mentorship and coaching
// Best opportunities and environment to succeed 