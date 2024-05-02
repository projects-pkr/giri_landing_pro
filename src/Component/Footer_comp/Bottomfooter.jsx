import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Link,
  Card,
  CardMedia,
  CardContent,
  Icon,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  AspectRatio,
} from "@mui/icons-material";
// import backgroundImage from "../../public/Images/footer/map-footer.png"; // Import your background image
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
// import image_one from "/public/Images/footer/sample1.jpg";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlaceIcon from "@mui/icons-material/Place";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "url('/public/Images/footer/footer-bg.jpg')",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        p:{xl:"20",xs:2} ,
        color: "#ffffff",
        // display: "flex",
        // width: "100%",
        // height: "100%",
      }}
      component="footer"
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h2"
              style={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "700",
              }}
            >
              About Business
            </Typography>
            <Box>
              <HorizontalRuleIcon style={{ color: "red" }}></HorizontalRuleIcon>
            </Box>
            <Typography>
              As a business consultant, we focus on delivering quantifiable
              results for our customers, based on a well-tested methodology and
              solid experience.
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Link
                href="#"
                sx={{ ml: 1, color: "#ffffff", "&:hover": { color: "red" } }}
              >
                <FacebookIcon />
              </Link>
              <Link
                href="#"
                sx={{ ml: 1, color: "#ffffff", "&:hover": { color: "red" } }}
              >
                <TwitterIcon />
              </Link>
              <Link
                href="#"
                sx={{ ml: 1, color: "#ffffff", "&:hover": { color: "red" } }}
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="#"
                sx={{ ml: 1, color: "#ffffff", "&:hover": { color: "red" } }}
              >
                <YouTubeIcon />
              </Link>
            </Box>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                color: "white",
                backgroundColor: "red", // Set background color to transparent
                backgroundImage: "url('path_to_your_image.jpg')", // Replace 'path_to_your_image.jpg' with your actual image path
                backgroundBlendMode: "color", // Blend the background color with the image
                "&:hover": {
                  backgroundBlendMode: "color",
                  backgroundColor: "rgba(255, 0, 0, 0.3)", // Adjust the opacity or color as needed
                },
              }}
            >
              READ MORE
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h2"
              style={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "700",
              }}
            >
              Quick Links
            </Typography>
            <Box>
              <HorizontalRuleIcon style={{ color: "red" }}></HorizontalRuleIcon>
            </Box>

            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <KeyboardDoubleArrowRightIcon sx={{ marginBottom: "10px" }} />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": {
                    color: "red",
                  },
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Make Appointment
              </Link>
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <KeyboardDoubleArrowRightIcon sx={{ marginBottom: "10px" }} />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": {
                    color: "red",
                  },
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Customer Services
              </Link>
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <KeyboardDoubleArrowRightIcon sx={{ marginBottom: "10px" }} />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": {
                    color: "red",
                  },
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Department Services
              </Link>
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <KeyboardDoubleArrowRightIcon sx={{ marginBottom: "10px" }} />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": {
                    color: "red",
                  },
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                About Company
              </Link>
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <KeyboardDoubleArrowRightIcon sx={{ marginBottom: "10px" }} />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": {
                    color: "red",
                  },
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Our case Studies
              </Link>
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <KeyboardDoubleArrowRightIcon sx={{ marginBottom: "10px" }} />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": {
                    color: "red",
                  },
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Free Cinsultation
              </Link>
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <KeyboardDoubleArrowRightIcon sx={{ marginBottom: "10px" }} />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": {
                    color: "red",
                  },
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Meet Our Experts
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h2"
              style={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "700",
              }}
            >
              Latest News
            </Typography>
            <Box>
              <HorizontalRuleIcon style={{ color: "red" }}></HorizontalRuleIcon>
            </Box>

            {/* //box first end  */}
            <Box>
              <Grid container>
                <Grid item>
                  <Box sx={{ marginRight: "8px" }}>
                    <img
                      src="/public/Images/footer/sample1.jpg"
                      style={{ width: "70px", height: "70px" }}
                      alt=""
                    />
                  </Box>{" "}
                </Grid>
                <Grid item>
                  <Box>
                    <Typography>May 01, 2019</Typography>
                    <Typography
                      sx={{
                        display: "inline-block",
                        "&:hover": {
                          color: "red",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Typography>Successful Growth In</Typography>
                      <Typography>Business 2018</Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container>
                <Grid item xl={4}>
                  <Box
                    sx={{
                      marginRight: "8px",
                      marginBottom: "12px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      src="/public/Images/footer/sample3.jpg"
                      style={{ width: "70px", height: "70px" }}
                      alt=""
                    />
                  </Box>{" "}
                </Grid>
                <Grid item xl={8}>
                  <Box>
                    <Typography>May 03, 2019</Typography>
                    <Typography
                      sx={{
                        display: "inline-block",
                        "&:hover": {
                          color: "red",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Typography>Achieving Best Business </Typography>
                      <Typography>Awards</Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container>
                <Grid item>
                  <Box sx={{ marginRight: "8px" }}>
                    <img
                      src="/public/Images/footer/sample2.jpg"
                      style={{ width: "70px", height: "70px" }}
                      alt=""
                    />
                  </Box>{" "}
                </Grid>
                <Grid item>
                  <Box>
                    <Typography>May 05, 2019</Typography>
                    <Typography
                      sx={{
                        display: "inline-block",
                        // fontSize: '15px',
                        "&:hover": {
                          color: "red",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Typography>Seminar for Best </Typography>
                      <Typography>Marketing Strategy</Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h2"
              style={{
                fontSize: "30px",
                fontFamily: "poppins",
                fontWeight: "700",
              }}
            >
              Our Branches
            </Typography>
            <Box>
              <HorizontalRuleIcon style={{ color: "red" }}></HorizontalRuleIcon>
            </Box>
            <Box sx={{ width: "200px", height: "200px" }}>
              <img src="/public/Images/footer/map-footer.png" alt="Your image" />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PlaceIcon style={{ color: "red" }} />
              <Typography variant="body2" style={{ fontSize: "15px" }}>
                Australia:1234 567890
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PlaceIcon style={{ color: "red" }} />
              <Typography
                variant="body2"
                style={{ fontSize: "15px", marginTop: "12px" }}
              >
                Ontario:1234 567890
              </Typography>
            </Box>
            {/* Replace the comment with your map component */}
          </Grid>
        </Grid>
        <Box sx={{ mt: 6 }}>
          <Typography variant="body2" align="center">
            Copyright ©{new Date().getFullYear()} Fomdex. All rights reserved.
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              textDecoration: "none",
            }}
          >
            <Typography>
              <Link
                href="#"
                sx={{
                  marginBottom: "8px",
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": { color: "red", textDecoration: "none" },
                }}
              >
                About Us
              </Link>
            </Typography>{" "}
            <Typography>
              <Link
                href="#"
                sx={{
                  marginBottom: "8px",
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": { color: "red" },
                }}
              ></Link>
            </Typography>
            <Typography>l</Typography>
            <Typography>
              <Link
                href="#"
                sx={{
                  marginBottom: "8px",
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": { color: "red", textDecoration: "none" },
                }}
              >
                Services
              </Link>
            </Typography>
            <Typography>l</Typography>
            <Typography>
              {" "}
              <Link
                href="#"
                sx={{
                  marginBottom: "8px",
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": { color: "red", textDecoration: "none" },
                }}
              >
                Privacy
              </Link>
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
