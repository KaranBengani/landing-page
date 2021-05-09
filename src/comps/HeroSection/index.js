import React, { useState } from "react";

import image from "../../images/picture.svg";
import {
  HeroContainer,
  HeroBg,
  PicBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroB,
  HeroBC,
} from "./HeroElements";
// import { Button } from "../ButtonElements";

const HeroSection = () => {
  // const [hover, setHover] = useState(false);
  // const onHover = () => {
  //   setHover(!hover);
  // };
  const text = " Programming With Courses \n Created By Industry Experts";

  return (
    <HeroContainer>
      <HeroBg>
        <PicBg src={image} alt="fire" />
      </HeroBg>
      <HeroContent>
        {/* <HeroH1>Learn and Practise</HeroH1>
        <HeroP>{text}</HeroP>
        <HeroB >Build your Skill Profile</HeroB>
        <HeroBC>
          Build your personal brand by building your skill profile
        </HeroBC> */}
        {/* <HeroBtnWrapper>
                    <Button to = 'signup' onMouseEnter = { onHover } onMouseLeave = {onHover} primary="true" dark="true">
                        Get started { hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>         */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
