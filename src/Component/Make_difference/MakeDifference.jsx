import React, { useState } from "react";
import './MakeDifference.css'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import {
  Grid,
  Typography,
  Button,
  Box,
  Link,
  ButtonBase,
  Dialog,
  useMediaQuery,
  IconButton,
} from "@mui/material";
// import bgimage from '../../../public/images/bgimage.jpg';
import ReactPlayer from "react-player/youtube";
import CloseIcon from "@mui/icons-material/Close";

const MakeDifference = () => {
  const [show, setShow] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Grid container 
      // some correction here
      sx={{ textAlign: "center", color: "white",
      position:{xl:"relative",xs:"static"},marginTop:"250px"
    // --------------------------------
       }}>
        <Box
          style={{
            background: `linear-gradient(rgba(11, 12, 38, 0.87), rgba(11, 12, 38, 0.87)),url('/public/images/bgimage.jpg')`,
            width: "100%",
            backgroundSize: "cover",
          }}
        >
          <Box sx={{ padding: { xs: "60px", sm: "100px" } }}>
            <Dialog
              onClose={() => {
                setShow(false);
              }}
              open={show}
              maxWidth="lg"
            >
              <IconButton
                aria-label="close"
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "5px",
                  color: "white",
                }}
                onClick={() => setShow(false)}
              >
                <CloseIcon />
              </IconButton>
              <ReactPlayer
                url="https://youtu.be/7e90gBu4pas"
                width={isSmallScreen ? "100%" : "560px"}
                height={isSmallScreen ? "240px" : "315px"}
              />
            </Dialog>

            {/* <Link href="https://youtu.be/7e90gBu4pas" underline="none"> */}
            <ButtonBase onClick={() => setShow(true)}>
            <PlayArrowRoundedIcon className='icon' />
            </ButtonBase>
            {/* </Link> */}
            <Typography
              sx={{
                margin: "15px",
                textAlign: "center",
                fontSize: { xs: "10px", sm: "14px" },
                fontWeight: "700",
              }}
            >
              WE MAKE A DIFFERENCE
            </Typography>

            <Box sx={{ margin: { sm: "12px 60px " } }}>
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "25px", md: "55px" },
                  fontWeight: "700",
                  marginBottom: "30px",
                }}
              >
                The Best Solutions For Developing Your Business
              </Typography>
            </Box>
            <Button
              sx={{
                backgroundColor: "red",
                color: "white",
                fontWeight: "900",
                padding: { sm: "13px 25px" },
                borderRadius: "0",
                "&:hover": { backgroundColor: "black" },
              }}
            >
              VIEW MORE SERVICES
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default MakeDifference;
