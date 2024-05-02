import React, { useState, useRef } from 'react';
import './Member.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {  Grid, CardContent, Typography, Box, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const data = [
  {
    id: 1,
    title: 'Alena Due',
    subTitle: "Business man",
    description: 'If you can offer a free tier that provides a lot of value, it will naturally help your product to spread much more rapidly.',
    avatarUrl: '/public/Images/imgSlider (1).jpg',
  },
  {
    id: 2,
    title: 'Alena Due',
    subTitle: "Business man",
    description: 'If you can offer a free tier that provides a lot of value, it will naturally help your product to spread much more rapidly.',
    avatarUrl: './public/images/imgSlider (2).jpg',
  },
  {
    id: 3,
    title: 'Alena Due',
    subTitle: "Business man",
    description: 'If you can offer a free tier that provides a lot of value, it will naturally help your product to spread much more rapidly.',
    avatarUrl: './public/images/imgSlider (3).jpg',
  },
];

const MemberSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000,
    prevArrow: null,
    nextArrow: null,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const moveDot = index => {
    setSlideIndex(index);
    sliderRef.current.slickGoTo(index); // Slide to the corresponding index
  }

  return (
    < Grid  sx={{
        backgroundImage: 'url("/public/images/map-col-bg.jpg")',
        backgroundPosition: 'center',
        minHeight: '35vh',
        marginLeft: {xs: "none", lg: "0px"},
        width: {sm: "100%", lg: "90%"}

        
    }}>
      <Box  sx={{ textAlign: 'center', position: 'relative' }}>
        <Slider {...settings} ref={sliderRef} >
          {data.map((slide, index) => (
            <div key={slide.id}>
              <Box  sx={{background: "transparent", minHeight: '10vh', padding: "20px"}}>
                <Box sx={{marginTop: '20px', textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                  <Box className='avataricon'>
                  <FormatQuoteIcon style={{
                    fontFamily: "fontawesome",
                    fontSize: "14px",
                    position: "relative",
                    lineHeight: "33px",
                    top: "60px",
                    right: "45px",
                    width: "31px",
                    height: "31px",
                    textAlign: "center",
                    color: "#fff",
                    borderRadius: "50%",
                    backgroundColor: "black",
                    transform: 'rotate(180deg)',
                    zIndex: "1"
                  }} />
                  <Avatar src={slide.avatarUrl} sx={{ width: "95px", height: "95px", border: '3px solid white', borderRadius: '50%', textAlign: "center", margin: '20px' }} />
                  </Box>
                  <Box sx={{ color: 'white' }}>
                    {[...Array(5)].map((_, starIndex) => (
                      <StarIcon key={starIndex} />
                    ))}
                  </Box>
                </Box>
                <CardContent sx={{ color: 'white', textAlign: 'center' }}>
                  <Box sx={{margin: {sm:"12px 180px 8px", lg: "12px 180px 8px"}}}>
                    <Typography sx={{fontSize: {xs: "17px", sm:"18px"}, fontStyle: "italic", marginBottom: "27px"}}>{slide.description}</Typography>
                  </Box>
                  <Typography sx={{fontSize: "17px", fontWeight: "600"}} component="div">
                    {slide.title}
                  </Typography>
                  <Typography sx={{fontSize: "15px"}} component="div">
                    {slide.subTitle}
                  </Typography>
                </CardContent>
              </Box>
            </div>
          ))}
        </Slider>
        <div className='container-dots' style={{ position: 'absolute', bottom: '20px', right: '1px' }}>
          {Array.from({length: data.length}).map((_, index) => (
            <div 
              onClick={() => moveDot(index)}
              className={slideIndex === index ? "dot active" : "dot"} 
              key={index}
            ></div>
          ))}
        </div>
      </Box>
    </Grid>
  );
};

export default MemberSlider;
