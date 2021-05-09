import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PicBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  positon: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  position: absolute;
  width: 261px;
  height: 0px;
  left: 76px;
  top: 456px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 0px;
  /* identical to box height, or 0% */

  letter-spacing: 0.14em;

  color: #FFFFFF;
  
  @media screen and (max-width: 768px) {
    font size: 24px;
  }

  @media screen and (max-width: 480px)  {
    font-size: 18px;
  }
`;

export const HeroP = styled.p`
  
  position: absolute;
  width: 282px;
  height: 20px;
  left: 65px;
  top: 475px;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  letter-spacing: 0.31em;

  color: #141414;
  @media screen and (max-width: 768px) {
    font size: 14px;
  }

  @media screen and (max-width: 480px)  {
    font-size: 10px;
  }
  
`;

export const HeroB = styled.div`
  position: absolute;
  width: 330px;
  height: 0px;
  left: 480px;
  top: 690px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;

  /* identical to box height, or 0% */

  letter-spacing: 0.14em;

  color: #141414;
  @media screen and (max-width: 768px) {
    font size: 40px;
  }

  @media screen and (max-width: 480px)  {
    font-size: 32px;
  }
`;

export const HeroBC = styled.div`
  position: absolute;
  width: 573px;
  height: 0px;
  left: 400px;
  top: 729px;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 0px;


  letter-spacing: 0.31em;

  color: #141414;
  @media screen and (max-width: 768px) {
    font size: 40px;
  }

  @media screen and (max-width: 480px)  {
    font-size: 32px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
