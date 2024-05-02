import React from 'react';
import './Whats_we_do.css'
import { Box, Container, Typography, keyframes } from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import PeopleIcon from '@mui/icons-material/People';
export default function Whats_we_do() {
    const box_row = {
        key: {
            display: {xl:"flex" ,md:"flex",xs:"block"},
            alignItems: "center",
            justifyContent: "center"
        }
    }
    const card_box = {
        key: {
            height: "236px",
            width: "300px",
            border: "2px dashed rgba(255, 255, 255, .1)",
            padding: "49px 25px 36px 25px",
            color: "white",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            marginBottom:"30px",
            marginLeft:{xl:"15px" ,md:"8px",xs:"0px"},
            marginRight:"15px",
            '&:hover':{
border:"2px dashed red",
transitionduration:"1s",
}
        }}
    const card = {
        key: {

            display: "flex",
            flexDirection: "column",
            alignItems: "center",



        }
    }
    const card_name = {
        key: {
            fontFamily: "poppins",
            fontWeight: "600",
            fontSize: "20px",
            width: "15rem",
            marginTop: "15px"


        }}
    const card_content = {
        key: {

            fontFamily: "poppins",
            fontWeight: "400",
            fontSize: "14px",
            width: {xl:"17rem", md:"15rem", xs:"7rem"},
            marginTop: "15px"
        }}
    



    return (
        <>
            <Container maxWidth={"100vw"} sx={{
                background: `linear-gradient(rgba(11, 12, 38, 0.87), rgba(11, 12, 38, 0.87)),url('/public/Images/whats we do/row-bgimage-1.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                // -----------------
paddingBottom:"150px",
position:"relative"
// this was changed
            }}>
                {/* ----------------first box--------------- */}

                <Box sx={{ height: "35vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h5" style={{ paddingTop: "6rem", fontSize: "12px", fontFamily: 'poppins', fontWeight: "600", color: "white", letterSpacing: "2px" }}>
                        WHATS WE DO
                    </Typography>
                    <Typography variant="h2" style={{
                        fontSize: "36px",
                        fontWeight: "700",
                        fontFamily: "poppins",
                        color: "white",
                        marginTop: "1rem",
                        width:{xl:"10rem", md:"25rem", xs:"20rem"},
                        textAlign: "center"
                    }}> We Creating Solutions For Your Organization</Typography>

                    <Typography variant="h1" color="error"><HorizontalRuleIcon style={{ fontSize: "55px", marginTop:"10px" }} /></Typography>
                </Box>

                {/* ----------------second box--------------- */}
                <Box sx={{}}>
                    {/*----------------- box row-1 -------------------- */}
                    <Box sx={{ ...box_row.key, marginTop: "50px" }}>
                        {/* -----------card-1 ------------ */}
                        <Box sx={card_box.key} className="animated_border">

                            <Box sx={card.key}>

                                <Box><Typography style={{
                                         height: "40px", width: "40px",color:"red"
                                    }}><PeopleIcon/> </Typography></Box>
                                <Typography variant='h5' style={card_name.key}>Business Finance Strategy</Typography>
                                <Typography style={card_content.key} >Devise and implement business strategies that drive success—for an entire business or division, technology,or asset.</Typography>
                            </Box>
                        </Box>
                        {/* -----------card-2 ------------ */}
                        <Box sx={card_box.key}>

                            <Box sx={card.key}>

                                <Box><Typography style={{
                                         height: "40px", width: "40px",color:"red"
                                    }}><PeopleIcon/> </Typography></Box>
                                <Typography variant='h5' style={card_name.key}>Portfolio &amp; Resource Allocation</Typography>
                                <Typography style={card_content.key} >By balancing and optimizing the many competing assets and initiatives achieve deep &amp; lasting improvements.</Typography>
                            </Box>
                        </Box>
                        {/* -----------card-3 ------------ */}
                        <Box sx={card_box.key}>

                            <Box sx={card.key}>

                                <Box><Typography style={{
                                         height: "40px", width: "40px",color:"red"
                                    }}><PeopleIcon/> </Typography></Box>
                                <Typography variant='h5' style={card_name.key}>Organization &amp; Decision Process</Typography>
                                <Typography style={card_content.key} >Organizations are designed to be effective and an efficient. The processes require cross-functional teaming.</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/*------------------------------------ box row-2----------------------------------------- */}
                    <Box sx={box_row.key}>
                        {/* -----------card-4 ------------ */}
                        <Box sx={card_box.key }>

                            <Box sx={card.key}>

                                <Box><Typography style={{
                                         height: "40px", width: "40px",color:"red"
                                    }}><PeopleIcon/> </Typography></Box>
                                <Typography variant='h5' style={card_name.key}>Decision &amp; Risk Analytic</Typography>
                                <Typography style={card_content.key} >Our decision risk analytics empower clients to develop rational decision-making models and development.</Typography>
                            </Box>
                        </Box>
                        {/* -----------card-5 ------------ */}
                        <Box sx={card_box.key}>

                            <Box sx={card.key}>

                                <Box><Typography style={{
                                         height: "40px", width: "40px",color:"red"
                                    }}><PeopleIcon/> </Typography></Box>
                                <Typography variant='h5' style={card_name.key}>Banking &amp; Capital Markets</Typography>
                                <Typography style={card_content.key} >The venues where savings and investments are channeled between the suppliers who have capital and those.</Typography>
                            </Box>
                        </Box>
                        {/* -----------card-6 ------------ */}
                        <Box sx={card_box.key}>

                            <Box sx={card.key}>

                                <Box><Typography style={{
                                         height: "40px", width: "40px",color:"red"
                                    }}><PeopleIcon/> </Typography></Box>
                                <Typography variant='h5' style={card_name.key}>Modern &amp; Tribe Workplace</Typography>
                                <Typography style={card_content.key} >Redefine your workplace value equation that encourage staff to work more attentively and gracefully.</Typography>
                            </Box>
                        </Box>
                    </Box>


                </Box>

            </Container>
        </>
    )
}
