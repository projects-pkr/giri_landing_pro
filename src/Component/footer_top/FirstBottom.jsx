import React from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";
// Importing the background image as a string assuming it's a file path
import backgroundImage from "/public/Images/topfooter/footer-logo.png";
import { Button } from "@mui/material";
import { Block, BorderBottom, BorderTop } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const FirstBottom = () => {
  return (
    <>
      <Box sx={{
        backgroundImage: "url( '/public/Images/topfooter/footer-bg-one.jpg')",


        display: "flex",
        justifyContent: "center",

      }} >

        <Box sx={{
          paddingTop: { xl: "50px" },
          paddingBottom: { xl: "50px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          {/*================== first box====================== */}


          <Box sx={{ paddingTop: { xl: "0px ", xs: "20px" } }}>
            <Typography>
              <img src="/public/Images/topfooter/footer-logo.png" alt="logo" />
              {/* Updated image source path */}
            </Typography>
          </Box>

          {/* ====================second box=============== */}
          <Box sx={{
            display: { xl: 'flex', md: "flex", xs: "block" }, justifyContent: 'center'
          }}>
            <Box sx={{
              marginTop: "40px", height: "8rem",
              display: { xl: 'flex', md: "flex", xs: "block" }, justifyContent: "center", alignItems: "center",
              borderTop: "1px solid #e5eef7", borderBottom: "1px solid #e5eef7", textAlign: "center"
            }}
            >
              <Box sx={{ borderRight: '1px solid #e5eef7', height: '70px', width: "25rem" }} >
                <Typography variant="h2" style={{ fontSize: '20px', fontFamily: "poppins", fontWeight: "600" }}>Our Address</Typography >
                <Typography style={{ fontFamily: "poppins", fontSize: "14px", fontwidth: "400", color: '#8d9297' }}>Evanto HQ 24 Fifth st., Los Angeles, USA</Typography>
              </Box>
              <Box sx={{ borderRight: "1px solid #e5eef7", height: '70px', width: "25rem" }}>
                <Typography variant="h5" style={{ fontSize: '20px', fontFamily: "poppins", fontWeight: "600" }}>Talk To Expert</Typography>
                <Typography style={{ fontFamily: "poppins", fontSize: "14px", fontwidth: "400", color: '#8d9297' }}>+1234 567 8910 or +1234 567 8911</Typography>
              </Box>
              <Box sx={{

                height: '70px',
                width: "25rem"
              }}>
                <Typography variant="h5" style={{ fontSize: '20px', fontFamily: "poppins", fontWeight: "600" }}>Email Us</Typography>
                <Typography style={{ fontFamily: "poppins", fontSize: "14px", fontwidth: "400", color: '#8d9297' }}>example@yourdomain.com</Typography>
              </Box>
            </Box>
          </Box>
          {/*========================= third box========== */}

          <Box
            sx={{
              display: "flex",
              marginTop: { xl: "40px", xs: "100px" },
              marginBottom: { xl: "20px", xs: "10px" }
            }}
          >
            <Box sx={{display: { xl: "flex", xs: "block" },justifyContent: "space-between"
            }}>

              <Box sx={{
                display: "flex", alignItems: "center", paddingLeft: "10px", backgroundColor: "white",
                borderTopLeftRadius: "100px",
                borderBottomLeftRadius: "100px",
                border: "1px solid #dedede"
              }}><MailOutlineIcon style={{ color: "#8d9297" }} />
                <input type="text" placeholder="Your Email Address" style={{
                  backgroundColor: "white", height: "40px", color: "#8d9297", outline: "none", border: 'none', fontWeight: "400", fontFamily: "poppins",
                  width: "20rem"
                }} />
              </Box>
              <Box sx={{
                backgroundColor: { xl: "red", xs: "none" },
                display: "flex",
                alignItems: "center",
                borderTopRightRadius: "100px",
                borderBottomRightRadius: "100px"
              }}>
                <Button sx={{
                  borderTopRightRadius: "100px",
                  borderBottomRightRadius: "100px",
                  borderTopLeftRadius:{xl:"0px",xs:"100px"},
                   borderBottomLeftRadius:{xl:"0px",xs:"100px"},
                  height: "40px",
                  backgroundColor: "red",
                  '&:hover': { backgroundColor: "black" }
                }}>
                  <Typography style={{
                    color: "white",
                    fontFamily: "poppins",
                    fontSize: "14px",
                    fontWeight: '600', display: "flex", alignItems: "center"
                  }}>submit <ArrowForwardIcon style={{ color: "white" }} /></Typography>
                </Button>
              </Box>



            </Box>





          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FirstBottom;
