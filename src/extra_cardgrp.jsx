import React from 'react'
import { Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



export default function Cardgrp() {



    return (
        <>
            <Container>
                <Box sx={{display:{xl:"flex",md:"flex",xs:"block"},alignContent:"center",justifyContent:"center"}}>
                    {/* first box */}
                    <Box sx={{
                        textAlign: "center", '&:hover': {
                            transform: 'translateY(-10px)',
                            transitionDuration: "0.5s",
                            TransitionTimingFunction: "ease-in-out",
                            '& .box': { backgroundColor: 'red',transitionDuration:"0.5s" },
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
                                <Typography >
                                    <a href="#">
                                    <Box className="box" sx={{ height: "40px", width: "40px", borderRadius: "50%", border: "1px solid #e8ecef", textAlign: "center", backgroundColor: "white", color: '#e8ecef' }}>
                                            <ChevronRightIcon />
                                        </Box>
                                    </a>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    {/*-------------------- second box ------------------------------------------------*/}
                    <Box sx={{marginLeft:"40px",marginRight:"40px",
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
                                image="/public/Images/cardgrp/06.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography style={{ color: "#8d9297", fontSize: "14px", fontFamily: "poppins", fontWeight: '400' }}>
                                We are in charge of, to increase of a  consumer brand awareness and the revenue.
                                </Typography>
                                <Typography >
                                    <a href="#">
                                        <Box className="box" sx={{ height: "40px", width: "40px", borderRadius: "50%", border: "1px solid #e8ecef", textAlign: "center", backgroundColor: "white", color: '#e8ecef' }}>
                                            <ChevronRightIcon />
                                        </Box>
                                    </a>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    {/* --------------------------third box ------------------------------------*/}
                    <Box sx={{
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
                                image="/public/Images/cardgrp/06.jpg"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography style={{ color: "#8d9297", fontSize: "14px", fontFamily: "poppins", fontWeight: '400' }}>
                                To implement future-oriented logistics strategies leading companies in all industries.
                                </Typography>
                                <Typography >
                                    <a href="#">
                                    <Box className="box" sx={{ height: "40px", width: "40px", borderRadius: "50%", border: "1px solid #e8ecef", textAlign: "center", backgroundColor: "white", color: '#e8ecef' }}>
                                            <ChevronRightIcon />
                                        </Box>
                                    </a>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>

            </Container>

        </>
    )
}
