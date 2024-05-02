import React from "react";
import "./Business_consulting.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box,Typography } from "@mui/material";

export default function Slider_main_comp() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
     autoplay: true,
     autoplaySpeed: 3000
  };

  return (
    <Box maxWidth="xl" sx={{position:"relative"}}>
      <Box className="slider-container">
        <Slider {...settings}>
          {/* slider -1 */}
          <Box
            className="slider-item-first"
            sx={{
              height: '100vh',
              width: '100vw',
              backgroundImage: "url('/public/Images/main slider component/slider-mainbg-001.jpg')",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              
            
            }}>
            <Box 
              className="innerbox-first"
              sx={{
                marginTop: { xl: '12rem', md: '5rem', xs: '3rem' },
                marginLeft: { xl: '10rem', md: '5rem', xs: '4rem' },
                
              }}
            >
              <Typography variant="h5" className="page-name">
                HELPING YOU TO
              </Typography>
              <Typography
                variant="h1"
                className="heading"
                // data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
                sx={{
                  fontSize: { xl: '56px', md: '36px', xs: '22px' },
                  width: { xl: '33rem', md: "20rem", xs: "15rem" }
                }}
              >
                Fastest Way to Achieve your{' '}
                <span variant="h1" className="heading-part">
                  Goal
                </span>
              </Typography>
              <Typography
                className="content"
                sx={{ width: { xl: '29rem', md: '20rem', xs: '15rem' } }}
              >
                Comprehensive financial advice and financial services that are tailored to meet your individual needs.
              </Typography>
              <Box>
                <Box className="btn-box" sx={{ display: { xl: 'flex', md: 'flex', xs: 'block' } }}>
                  <button variant="contained" className="btn-one" >
                    OUR SERVICES
                  </button>
                  <button variant="contained" className="btn-two"style={{ marginLeft: { xl: '15px', md: '10px', xs: '0px' } }}>
                    QUICK CALL BACK
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* slider-2 */}
          <Box className="slider-item-second">
            <Box className="innerbox-second">
              <Typography variant="h5" className="page-name-two">
                BUSINESS CONSULTING
              </Typography>
              <Typography
                variant="h2"
                className="heading-two"
                sx={{
                  width: { xl: '33rem', md: '25rem', xs: '10rem' },
                  fontSize: { xl: '56px', md: '48px', xs: '36px' },
                }}
              >
                Manage and Grow Your Business
              </Typography>
              <Box>
                <button variant="contained" className="btn">
                  OUR SERVICES
                </button>
              </Box>
            </Box>
          </Box>
          {/* slider-3 */}
          <Box
            className="slider-item-third"
            sx={{
              height: '100vh',
              width: '100vw',
              backgroundImage: "url('/public/Images/main slider component/slider-mainbg-003.jpg')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Box
              className="innerbox-third"
              sx={{
                marginLeft: { xl: '47rem', md: '30rem', xs: '3rem' },
                marginTop: { xl: '10rem', md: '5rem', xs: '1rem' },
              }}
            >
              <Typography variant="h5" className="page-name-third">
                GREAT EXPERIENCE
              </Typography>
              <Box>
                <Typography variant="h2" className="heading-third"sx={{width:{xl:"33rem",md:"25rem",xs:"15rem"}}}>
                  We Provide Financial Planning
                </Typography>
              </Box>
              <Typography className="content-third" sx={{width:{xl:"29rem",md:"20rem",xs:"15rem"}}}>
                Create a refreshing customer experience that's free of complexity and confusion.
              </Typography>
              <Box className="btn-box-third" sx={{ display: { xl: 'flex', md: 'flex', xs: 'block' } }}>
                <button variant="contained" className="btn-one-third" sx={{ marginLeft: { xl: '0px', md: '0px', xs: '15px' } }}>
                  OUR SERVICES
                </button>
                <button variant="contained" className="btn-two-third">
                  CONTACT US
                </button>
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>
    </Box>

  );
}
