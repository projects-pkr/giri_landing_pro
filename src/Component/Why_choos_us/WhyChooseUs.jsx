import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
  <>
  <Box 
  sx={{
    // height:'100vh',
    // paddingTop:"-70px", 
    position:{xl:"relative",xs:"static"},
    zIndex:{xl:"1",sx:"1"}
    }}>
    <Grid container justifyContent="flex-start" className="main"  >
      <Grid item xs={12} md={5} 
      sx={{
        marginTop:'-12px',
position:{xl:"static",md:"static",xs:"static"},
top:"o",
left:{xl:"0rem",md:"0rem",xs:"0rem"},
marginLeft:{xl:"135px",md:"100px",xs:"0px"},
      }}
      >
        <img
          className="img"
          style={{ width: "100%", display: "block" }}
          src="./public/Images/single-img-two.jpg"
          alt="img"
        />
      </Grid>

      <Grid item xs={12} md={5} 
       sx={{
         marginTop:"-60px",
         position:{xl:"absolute",xs:"static"},
         top:{xl:"0rem",md:'10rem',xs:'29rem'},
         left:{xl:" 48rem",md:'30rem',xs:"0rem"}
        
      
      }}
      >
        <Card className="ChooseCard" sx={{}}>
          <Box sx={{ padding: { xs: "20px", sm: "20px 40px" } }}>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "13px" },
                color: "red",
                fontWeight: "700",
              }}
            >
              WHY CHOOSE US
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "26px", sm: "35px" },
                fontWeight: "700",
                lineHeight: { xs: "36px", sm: "45px" },
              }}
            >
              We Provide Experts To Create A Great Value For Your Business
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              borderBottom: "1px dashed #e0e0e0",
              padding: { xs: "20px", sm: "30px 40px" },
            }}
          >
            <img
              src="./public/images/number-1 (1).png"
              alt="numbericon"
              style={{ height: "35px" }}
            />
            <Box paddingLeft={2}>
              <Typography fontWeight={550} sx={{fontSize: {xs: "18px", lg: "20px"}}}>We modify the whole system</Typography>
              <Typography  sx={{ color: "gray", fontSize: {xs: "18px", lg: "18px"} }}>
                By dealing with data, select tools that help you automate
                time-consuming processes.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              borderBottom: "1px dashed #e0e0e0",
              padding: { xs: "20px", sm: "40px" },
            }}
          >
            <img
              src="./public/images/number-2.png"
              alt="numbericon"
              style={{ height: "35px" }}
            />
            <Box paddingLeft={2}>
              <Typography fontWeight={550} sx={{fontSize: {xs: "18px", lg: "20px"}}}>Safeguard for Your Business</Typography>
              <Typography  sx={{ color: "gray", fontSize: {xs: "18px", lg: "18px"} }}>
              To guard, Avoid Revealing Too Much, Apply for a Provisional Patent, Trademark.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              borderBottom: "1px dashed #e0e0e0",
              padding: { xs: "20px", sm: "40px" },
            }}
          >
            <img
              src="./public/images/number-3.png"
              alt="numbericon"
              style={{ height: "35px" }}
            />
            <Box paddingLeft={2}>
              <Typography fontWeight={550} sx={{fontSize: {xs: "18px", lg: "20px"}}}>Beneficial Strategies</Typography>
              <Typography  sx={{ color: "gray", fontSize: {xs: "18px", lg: "18px"} }}>
              Strategic initiatives – all ideas welcome rather it’s by our employees or client.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              borderBottom: "1px dashed #e0e0e0",
              padding: { xs: "20px", sm: "40px" },
            }}
          >
            <img
              src="./public/Images/number-4.png"
              alt="numbericon"
              style={{ height: "35px" }}
            />
            <Box paddingLeft={2}>
              <Typography fontWeight={550} sx={{fontSize: {xs: "18px", lg: "20px"}}}>Build Solid Human Resource</Typography>
              <Typography  sx={{ color: "gray", fontSize: {xs: "18px", lg: "18px"} }}>
              Give employees generous boundaries by listening intently, Belief in them.
              </Typography>
            </Box>
          </Box>

          
         

          <Box
            sx={{
              display: "flex",
              padding: { xs: "20px", sm: "40px" },
            }}
          >
            <img
              src="./public/images/certificate.png"
              alt="numbericon"
              style={{ height: "40px" }}
            />
            <Box paddingLeft={2}>
              <Typography fontWeight={550} sx={{fontSize: {xs: "18px", lg: "20px"}}}>We Are an ISO Certified Company</Typography>
              <Typography  sx={{ color: "gray", fontSize: {xs: "18px", lg: "18px"} }}>
                We have achieved ISO 9001:2015 certification.
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
    </Box>
    </>
  );
};

export default WhyChooseUs;
