import React from 'react'
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Slider_main_comp from './Component/Main_slider_comp/Business_consultng';
import Cardgrp from './Component/Cardgrp/Cardgrp';
import AboutConsultancy from './Component/About_consultancy/About_consultancy';
import Whats_we_do from './Component/Whats_we_do/Whats_we_do';
import WhyChooseUs from './Component/Why_choos_us/WhyChooseUs';
import MakeDifference from './Component/Make_difference/MakeDifference';
import Our_latest_news from './Component/Our_latest_news/Our_latest_news';
import Our_team_member from './Component/Our_team_member/Our_team_member';
import MemberSlider from './Component/Team_member/TeamMember';
import FirstBottom from './Component/footer_top/FirstBottom';
import Footer from './Component/Footer_comp/Bottomfooter';
function App() {


  return (
    <>
      <Navbar/> 

      <Slider_main_comp/> 

      <Cardgrp/>

      <AboutConsultancy/>   

      <Whats_we_do/> 

      <WhyChooseUs/>

      <MakeDifference/>

      <Our_latest_news/> 

      <Our_team_member/> 

      <MemberSlider/>

      <FirstBottom />

      <Footer />
    </>
  )
}


export default App
