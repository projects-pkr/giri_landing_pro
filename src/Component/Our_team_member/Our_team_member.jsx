import React from "react";
import "./Our_team_member.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Box, Container, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import TwitterIcon from '@mui/icons-material/Twitter';


function Our_team_member() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        },
        breakpoint: 776,
        settings: {
          slidesToShow: 2

        },
        breakpoint: 556,
        settings: { slidesToShow: 1 }
      },

    ],
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <><Container>
      <Box sx={{
        height: "35vh",
        backgroundImage: "url('public/Images/team member/row-bgimage-3.png')",
        backgroundRepeat: "no-repeat", backgroundPosition: "center", display: "flex", flexDirection: "column", alignItems: "center"
      }}>
        <Typography variant="h5" style={{ paddingTop: "3rem", fontSize: "12px", fontFamily: 'poppins', fontWeight: "600", color: "red", letterspacing: "0.18em" }}>OUR TEAM MEMBER</Typography>
        <Typography variant="h2" style={{
          fontSize: "36px",
          fontWeight: "700",
          fontFamily: "poppins",
          marginTop: "1rem",
          width: { xl: "26rem", xs: "20rem" },
          textAlign: "center"
        }}> Discover our team and experts</Typography>

        <Typography variant="h1" color="error"><HorizontalRuleIcon style={{ fontSize: "55px" }} /></Typography>
      </Box>
      {/* -------------------------------------------slider box------------------------------------- */}
      <Box>
        <Slider {...settings}>

          {/* ----------slider page-1 -------------- */}
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Box overflow={"Hidden"}>
                  <Box className="card-main-box"  >
                    <CardMedia
                      component="img"
                      height="380"
                      image="/public/Images/team member/team-img01.jpg"
                      alt="green iguana" />
                  </Box>
                </Box>
                {/* ----------------btnbox--------------------*/}
                <Box className="main-btn-facebook-box">
                  <Tooltip title={<Typography style={{backgroundColor:"black",width:"110px",textAlign:"center"}} >Faebook</Typography>} 
          
                   placement="top" >
                    <Box className="inner-btn-facebook-box">
                      <Typography variant="h5" fontWeight={700} fontSize={20}>f</Typography>
                    </Box>
                  </Tooltip>

                  <Tooltip title={<Typography style={{backgroundColor:"black",width:"110px",textAlign:"center"}} >Twitter</Typography>}  placement="top">
                    <Box className="inner-btn-twitter-box">
                      <TwitterIcon style={{ fontSize: "16px" }} />
                    </Box>
                  </Tooltip>
                </Box>

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5">
                    <a href="#" className="card-name">Amelia Daniel</a>
                  </Typography>
                  <Typography className="card-desig">
                    Chairman and founder
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          {/* ----------slider page-2-------------- */}
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Box overflow={"Hidden"}>
                  <Box className="card-main-box"  >
                    <CardMedia
                      component="img"
                      height="380"
                      image="/public/Images/team member/team-img02.jpg"
                      alt="green iguana"
                    />
                  </Box>
                </Box>
                {/* ----------------btnbox--------------------*/}
                <Box className="main-btn-facebook-box">
                  <Tooltip title={<Typography style={{backgroundColor:"black",width:"110px",textAlign:"center"}} >Faebook</Typography>} placement="top">
                    <Box className="inner-btn-facebook-box">
                      <Typography variant="h5" fontWeight={700} fontSize={20}>f</Typography>
                    </Box>
                  </Tooltip>

                  <Tooltip title={<Typography style={{backgroundColor:"black",width:"110px",textAlign:"center"}} >Twitter</Typography>} placement="top">
                    <Box className="inner-btn-twitter-box" >
                      <TwitterIcon style={{ fontSize: "16px" }} />
                    </Box>
                  </Tooltip>
                </Box>

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5">
                    <a href="#" className="card-name">Alex Mason</a>
                  </Typography>
                  <Typography className="card-desig">
                    Visual Media
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          {/* ----------slider page-3-------------- */}
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Box overflow={"Hidden"}>
                  <Box className="card-main-box"  >
                    <CardMedia
                      component="img"
                      height="380"
                      image="/public/Images/team member/team-img03.jpg"
                      alt="green iguana"
                    />
                  </Box>
                </Box>
                {/* ----------------btnbox--------------------*/}
                <Box className="main-btn-facebook-box">
                  <Tooltip title={<Typography style={{backgroundColor:"black",width:"110px",textAlign:"center"}} >Faebook</Typography>} placement="top">
                    <Box className="inner-btn-facebook-box">
                      <Typography variant="h5" fontWeight={700} fontSize={20}>f</Typography>
                    </Box>
                  </Tooltip>

                  <Tooltip title={<Typography style={{backgroundColor:"black",width:"110px",textAlign:"center"}} >Twitter</Typography>} placement="top">
                    <Box className="inner-btn-twitter-box" >
                      <TwitterIcon style={{ fontSize: "16px" }} />
                    </Box>
                  </Tooltip>
                </Box>

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5">
                    <a href="#" className="card-name">Michael Harper</a>
                  </Typography>
                  <Typography className="card-desig">
                    Sales Manager
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          {/* ----------slider page-4-------------- */}
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Box overflow={"Hidden"}>
                  <Box className="card-main-box"  >
                    <CardMedia
                      component="img"
                      height="380"
                      image="/public/Images/team member/team-img04.jpg"
                      alt="green iguana"
                    />
                  </Box>
                </Box>
                {/* ----------------btnbox--------------------*/}
                <Box className="main-btn-facebook-box">
                  <Tooltip title={<Typography style={{backgroundColor:"black",width:"110px",textAlign:"center"}} >Faebook</Typography>} placement="top">
                    <Box className="inner-btn-facebook-box">
                      <Typography variant="h5" fontWeight={700} fontSize={20}>f</Typography>
                    </Box>
                  </Tooltip>

                  <Tooltip title={<Typography style={{backgroundColor:"black",width:"110px",textAlign:"center"}} >Twitter</Typography>} placement="top">
                    <Box className="inner-btn-twitter-box" >
                      <TwitterIcon style={{ fontSize: "16px" }} />
                    </Box>
                  </Tooltip>
                </Box>

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5">
                    <a href="#" className="card-name">Jhon Martin</a>
                  </Typography>
                  <Typography className="card-desig">
                    Chairman and founder
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          {/* ----------slider page-5-------------- */}
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Box overflow={"Hidden"}>
                  <Box className="card-main-box"  >
                    <CardMedia
                      component="img"
                      height="380"
                      image="/public/Images/team member/team-img05.jpg"
                      alt="green iguana"
                    />
                  </Box>
                </Box>
                {/* ----------------btnbox--------------------*/}
                <Box className="main-btn-facebook-box">
                  <Tooltip title={<Typography style={{backgroundColor:"black",width:"110px",textAlign:"center"}} >Faebook</Typography>} placement="top">
                    <Box className="inner-btn-facebook-box">
                      <Typography variant="h5" fontWeight={700} fontSize={20}>f</Typography>
                    </Box>
                  </Tooltip>

                  <Tooltip title={<Typography style={{backgroundColor:"black",width:"110px",textAlign:"center"}} >Twitter</Typography>} placement="top">
                    <Box className="inner-btn-twitter-box" >
                      <TwitterIcon style={{ fontSize: "16px" }} />
                    </Box>
                  </Tooltip>
                </Box>

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5">
                    <a href="#" className="card-name">Evelyn Jackson</a>
                  </Typography>
                  <Typography className="card-desig">
                    Visual Media
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>



        </Slider>
      </Box>
    </Container>
    </>

  );
}

export default Our_team_member;
