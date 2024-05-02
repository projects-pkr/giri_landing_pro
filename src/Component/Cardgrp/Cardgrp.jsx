import React from 'react';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';




export default function Cardgrp() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Box sx={{backgroundColor:'#f3f7f9'}} >
                <Box className="slider-container"
                    sx={{
                        paddingLeft: { xl: "250px", md: "100px", xs: "0px" },
                        paddingRight: { xl: "250px", md: "100px", xs: "0px" },
                        marginTop: "-110px",




                    }}>
                    <Slider {...settings}>
                        {/* ---------------slider box 1 ----------------------------------*/}
                        <Box sx={{ paddingTop: "50px" }} >

                            <Box sx={{
                                marginLeft: "15px", marginRight: "15px",
                                textAlign: "center",
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    transitionDuration: "0.5s",
                                    TransitionTimingFunction: "ease-in-out",
                                    '& .box': { backgroundColor: 'red', transitionDuration: "0.5s" },
                                    position: "relative"
                                }
                            }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        title={
                                            <Typography variant="h5" >
                                                <a href="#" style={{ textDecoration: 'none', fontFamily: "poppins", fontWeight: "600", color: "black", fontSize: "20px" }}>
                                                    Corporate Finance
                                                </a>
                                            </Typography>
                                        }
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="/public/Images/cardgrp/06.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography style={{ color: "#8d9297", fontSize: "14px", fontFamily: "poppins", fontWeight: '400' }}>
                                            Concerned with a variety of forms of company financing, aspects of the reorganization.
                                        </Typography>

                                        <a href="#">
                                            <Box className="box" sx={{
                                                height: "40px", width: "40px", borderRadius: "50%", border: "1px solid #e8ecef", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", color: '#e8ecef',
                                                marginLeft: "8rem", marginTop: "20px"
                                            }}>
                                                <ChevronRightIcon />
                                            </Box>
                                        </a>

                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                        {/* ---------------slider box-2 ----------------------------------*/}
                        <Box sx={{ paddingTop: "50px" }}>
                            <Box sx={{
                                marginLeft: "15px", marginRight: "15px",
                                textAlign: "center", '&:hover': {
                                    transform: 'translateY(-10px)',
                                    transitionDuration: "0.5s",
                                    TransitionTimingFunction: "ease-in-out",
                                    '& .box': { backgroundColor: 'red' },
                                }
                            }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        title={
                                            <Typography variant="h5" >
                                                <a href="#" style={{ textDecoration: 'none', fontFamily: "poppins", fontWeight: "600", color: "black", fontSize: "20px" }}>
                                                    Analytics Solutions
                                                </a>
                                            </Typography>
                                        }
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="/public/Images/cardgrp/04.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography style={{ color: "#8d9297", fontSize: "14px", fontFamily: "poppins", fontWeight: '400' }}>
                                            We are in charge of, to increase of a  consumer brand awareness and the revenue.
                                        </Typography>
                                        <a href="#">
                                            <Box className="box" sx={{
                                                height: "40px", width: "40px", borderRadius: "50%", border: "1px solid #e8ecef", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", color: '#e8ecef',
                                                marginLeft: "8rem", marginTop: "20px"
                                            }}>
                                                <ChevronRightIcon />
                                            </Box>
                                        </a>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                        {/* ---------------slider box-3 ----------------------------------*/}
                        <Box sx={{ paddingTop: "50px" }}>
                            <Box sx={{
                                marginLeft: "15px", marginRight: "15px",
                                textAlign: "center", '&:hover': {
                                    transform: 'translateY(-10px)',
                                    transitionDuration: "0.5s",
                                    TransitionTimingFunction: "ease-in-out",
                                    '& .box': { backgroundColor: 'red' },
                                }
                            }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        title={
                                            <Typography variant="h5" >
                                                <a href="#" style={{ textDecoration: 'none', fontFamily: "poppins", fontWeight: "600", color: "black", fontSize: "20px" }}>
                                                    Business Growth
                                                </a>
                                            </Typography>
                                        }
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="/public/Images/cardgrp/05.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography style={{ color: "#8d9297", fontSize: "14px", fontFamily: "poppins", fontWeight: '400' }}>
                                            To implement future-oriented logistics strategies leading companies in all industries.
                                        </Typography>
                                        <a href="#">
                                            <Box className="box" sx={{
                                                height: "40px", width: "40px", borderRadius: "50%", border: "1px solid #e8ecef", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", color: '#e8ecef',
                                                marginLeft: "8rem", marginTop: "20px"
                                            }}>
                                                <ChevronRightIcon />
                                            </Box>
                                        </a>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                        {/* ---------------slider box-4 ----------------------------------*/}
                        <Box sx={{ paddingTop: "50px" }}>
                            <Box sx={{
                                marginLeft: "15px", marginRight: "15px",
                                textAlign: "center",
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    transitionDuration: "0.5s",
                                    TransitionTimingFunction: "ease-in-out",
                                    '& .box': { backgroundColor: 'red' },
                                }
                            }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        title={
                                            <Typography variant="h5" >
                                                <a href="#" style={{ textDecoration: 'none', fontFamily: "poppins", fontWeight: "600", color: "black", fontSize: "20px" }}>
                                                    Advance Reports
                                                </a>
                                            </Typography>
                                        }
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="/public/Images/cardgrp/04.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography style={{ color: "#8d9297", fontSize: "14px", fontFamily: "poppins", fontWeight: '400' }}>
                                            We are in charge of, to increase of a  consumer brand awareness and the revenue.
                                        </Typography>
                                        <a href="#">
                                            <Box className="box" sx={{
                                                height: "40px", width: "40px", borderRadius: "50%", border: "1px solid #e8ecef", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", color: '#e8ecef',
                                                marginLeft: "8rem", marginTop: "20px"
                                            }}>
                                                <ChevronRightIcon />
                                            </Box>
                                        </a>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                        {/* ---------------slider box-5 ----------------------------------*/}
                        <Box sx={{ paddingTop: "50px" }}>
                            <Box sx={{
                                marginLeft: "15px", marginRight: "15px",
                                textAlign: "center", '&:hover': {
                                    transform: 'translateY(-10px)',
                                    transitionDuration: "0.5s",
                                    TransitionTimingFunction: "ease-in-out",
                                    '& .box': { backgroundColor: 'red' },
                                }
                            }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        title={
                                            <Typography variant="h5" >
                                                <a href="#" style={{ textDecoration: 'none', fontFamily: "poppins", fontWeight: "600", color: "black", fontSize: "20px" }}>
                                                    Chain Management
                                                </a>
                                            </Typography>
                                        }
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="/public/Images/cardgrp/05.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography style={{ color: "#8d9297", fontSize: "14px", fontFamily: "poppins", fontWeight: '400' }}>
                                            To implement future-oriented logistics strategies leading companies in all industries.
                                        </Typography>
                                        <a href="#">
                                            <Box className="box" sx={{
                                                height: "40px", width: "40px", borderRadius: "50%", border: "1px solid #e8ecef", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", color: '#e8ecef',
                                                marginLeft: "8rem", marginTop: "20px"
                                            }}>
                                                <ChevronRightIcon />
                                            </Box>
                                        </a>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    </Slider>
                </Box>
                <Box sx={{ display:"flex", flexDirection: {xl:'row',xs:"column"}, height:"120px",alignItems:"center",justifyContent:"center",paddingTop:"25px"}}>
                    <Typography style={{ fontFamily: "poppins", fontsize: "14px", color: "#8d9297", fontWeight: "400" }}>Don’t hesitate, contact us for better help and services.</Typography>
                    <a href="#"> <Typography style={{fontFamily: "poppins", fontsize: "20px", color: "black",fontWeight:"600",'&:hover':{color:"red"}}}>
                    Explore all services</Typography></a>
                   
                    

                    
                </Box>
            </Box>
        </>
    )
}
