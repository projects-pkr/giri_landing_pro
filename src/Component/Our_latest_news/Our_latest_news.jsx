import React from 'react'

import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'
import ModeIcon from '@mui/icons-material/Mode';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import card_one_img from "../../../public/Images/04.jpg";
import card_two_img from "../../../public/Images/post-one.jpg";
import card_three_img from "../../../public/Images/03.jpg";

export default function Our_latest_news() {
  return (
    <>
      <Container className='contianer'>

        <Box className="main-box-one" sx={{ marginTop: "8rem" }}>
          <Box className="background" sx={{ backgroundColor: "#f5faff" }}>

            <Grid container >
              <Grid item xl={6}>
                <Box>
                  <Typography variant="h5"  style={{ fontSize: "12px", fontFamily: 'poppins', fontWeight: "600", color: "red",letterspacing: "0.18em" }}>OUR LATEST NEWS</Typography>
                  <Typography variant="h2" style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    fontFamily: "poppins",
                    marginTop: "1rem",
                    paddingRight: "5rem"

                  }}>Read Our Latest Articles, Tips &amp; News</Typography>
                </Box></Grid>
              <Grid item xl={6} >
                <Typography style={{ marginTop: "2rem", marginLeft:{xl:"-2rem",md:"-1rem" ,xs:"opx"} , fontFamily: "poppins", color: "#687076", fontSize: "14px" }}> Know how to pursue pleasure rationally encounter consequences that are re rationally encounter consequences that are extremely painful.</Typography></Grid>
            </Grid>
          </Box>
        </Box>
        {/* ---------------card box------------------ */}
        {/* --------------card-1-------------------- */}
        <Box className="main-box-two" sx={{ marginTop: "2rem", display: "FLEX", flexDirection: { xl: "row", md: "row", xs: "column" }, justifyContent: { xl: "space-between", md: "space-evenly", xs: "space-evenly" } }}>
          {/* -------------card-1-------------------- */}
           <Box sx={{overflow:"hidden"}}><Box sx={{ maxWidth: 345,'&:hover': { transform: 'translateY(-10px)',
         transitionDuration:"0.5s",TransitionTimingFunction:"ease-in-out"
          } }}>
            <Card >
              <CardActionArea>
                
                  <CardMedia
                    component="img"
                    height="250"
                    image={card_one_img}
                    alt="green iguana"
                  />
                  <Box sx={{ height: "38px", width: "38px", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center", position: 'absolute', top: "15px", left: "265px" }}>
                    <ModeIcon style={{ color: "white" }}></ModeIcon>
                  </Box>
                

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <a href="#" style={{ color: "black", fontFamily: "poppins", textDecoration: "none", fontSize: "20px", fontWeight: "600" }}>Successful Growth In Business 2018</a>
                  </Typography>
                  <Grid container>
                    <Grid item xl={6}><Typography style={{ fontFamily: "poppins", fontSize: "12px", color: "#687076" }}><Box sx={{ display: "flex", alignItems: "center" }}><CalendarMonthIcon style={{ fontSize: "16px" }}></CalendarMonthIcon>
                      January 16, 2019  </Box></Typography></Grid>
                    <Grid item xl={6}><Typography style={{ fontFamily: "poppins", fontSize: "12px", color: "#687076" }}><Box sx={{ display: "flex", alignItems: "center" }}><ChatBubbleIcon style={{ fontSize: "14px" }}></ChatBubbleIcon>
                      2,comments  </Box></Typography></Grid>

                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card></Box></Box>
          {/* --------------Card-2----------------------------- */}
          <Box sx={{overflow:"hidden"}}>
            <Box sx={{ maxWidth: 345,'&:hover': { transform: 'translateY(-10px)',
         TransitionName:"transform",transitionDuration:".5s",TransitionTimingFunction:"ease-in-out"
          } }}>
            <Card >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={card_two_img}
                  alt="green iguana"
                />
                <Box sx={{ height: "38px", width: "38px", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center", position: 'absolute', top: "15px", left: "265px" }}>
                  <ModeIcon style={{ color: "white" }}></ModeIcon>
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <a href="#" style={{ color: "black", fontFamily: "poppins", textDecoration: "none", fontSize: "20px", fontWeight: "600" }}>Achieving Best Business Awards</a>
                  </Typography>
                  <Grid container>
                    <Grid item xl={6}><Typography style={{ fontFamily: "poppins", fontSize: "12px", color: "#687076" }}><Box sx={{ display: "flex", alignItems: "center" }}><CalendarMonthIcon style={{ fontSize: "16px" }}></CalendarMonthIcon>
                      January 19, 2018  </Box></Typography></Grid>
                    <Grid item xl={6}><Typography style={{ fontFamily: "poppins", fontSize: "12px", color: "#687076" }}><Box sx={{ display: "flex", alignItems: "center" }}><ChatBubbleIcon style={{ fontSize: "14px" }}></ChatBubbleIcon>
                      4,comments  </Box></Typography></Grid>

                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
            </Box>
          </Box>
          {/* --------------Card-3----------------------------- */}
          <Box sx={{overflow:"hidden"}}>
            <Box sx={{ maxWidth: 345,'&:hover': { transform: 'translateY(-10px)',
         TransitionName:"transform",transitionDuration:".5s",TransitionTimingFunction:"ease-in-out"
          } }}>
            <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={card_three_img}
                alt="green iguana"
              />
              <Box sx={{ height: "38px", width: "38px", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center", position: 'absolute', top: "15px", left: "265px" }}>
                <ModeIcon style={{ color: "white" }}></ModeIcon>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <a href="#" style={{ color: "black", fontFamily: "poppins", textDecoration: "none", fontSize: "20px", fontWeight: "600" }}>Seminar for Best Marketing Strategy</a>
                </Typography>
                <Grid container>
                  <Grid item xl={6}><Typography style={{ fontFamily: "poppins", fontSize: "12px", color: "#687076" }}><Box sx={{ display: "flex", alignItems: "center" }}><CalendarMonthIcon style={{ fontSize: "16px" }}></CalendarMonthIcon>
                    March 16, 2018 </Box></Typography></Grid>
                  <Grid item xl={6}><Typography style={{ fontFamily: "poppins", fontSize: "12px", color: "#687076" }}><Box sx={{ display: "flex", alignItems: "center" }}><ChatBubbleIcon style={{ fontSize: "14px" }}></ChatBubbleIcon>
                    3,comments  </Box></Typography></Grid>

                </Grid>
              </CardContent>
            </CardActionArea>
          </Card></Box>
          </Box>
        </Box>

      </Container >


    </>
  )
}
