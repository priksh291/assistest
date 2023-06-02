// import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Vector from '../Vector.png';
// import PasswordInput from '../pages/Password';
import React, { useState } from 'react';

const X610ChromeSize = () => {
    const [displayText, setDisplayText] = useState('');
  const [showText, setShowText] = useState(true);

  const handleImageClick = () => {
    setShowText(!showText);
  };

  const handleInputChange = (event) => {
    setDisplayText(event.target.value);
  };

  const maskedText = showText ? displayText : displayText.replace(/./g, '*');

  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevents the default behavior of following the link

    const url = event.target.href;
    window.open(url, '_blank'); // Opens the link in a new tab
  };
  return (
    <div className="relative bg-white w-full h-[609px] overflow-hidden text-center text-xs text-slategray font-poppins">
      <img
        className="absolute top-[calc(50%_-_277.5px)] left-[20px] rounded-[20px] w-[620px] h-[555px] object-cover"
        alt=""
        src="/rectangle-15@2x.png"
      />
      <div className="absolute top-[307px] left-[40px] tracking-[0.03em] text-left flex items-center w-[475px] h-28 text-[38px] text-white">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0 font-semibold">100% Uptime😎</p>
          <p className="m-0 text-[28px] text-silver">
            Zero Infrastructure
          </p>
          <p className="m-0 text-[28px] text-silver">
            Management
          </p>
        </span>
      </div>
      <div className="absolute top-[538px] left-[40px] w-[119px] h-[17px] flex flex-col items-start justify-start text-left text-silver">
        <div className="flex flex-row items-center justify-start gap-[2px]">
          <img
            className="relative w-[15px] h-[15px] overflow-hidden shrink-0"
            alt=""
            src="/internet-1-1.svg"
          />
          <div className="relative">
          <a href="aesthisia.com" onClick={handleLinkClick} style={{ textDecoration: 'none', color: 'white' }}>
                aesthisia.com
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-[453px] left-[40px] w-[37.89px] h-1.5">
        <div className="absolute top-[5.49px] left-[37.89px] rounded-[74.42px] bg-gray-200 w-[4.87px] h-[5.49px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <div className="absolute top-[5.49px] left-[29.23px] rounded-[74.42px] bg-gray-200 w-[4.87px] h-[5.49px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <div className="absolute top-[6px] left-[20px] rounded-[74.42px] bg-white w-5 h-1.5 [transform:_rotate(180deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[539px] left-[559px] w-14 h-[15px] overflow-hidden flex flex-row items-start justify-start gap-[6px]">
        <img
          className="cursor-pointer relative w-[15px] h-[15px] overflow-hidden shrink-0"
          alt=""
          src="/linkedin-1-1.svg"
        />
        <img
          className="cursor-pointer relative w-[15px] h-[15px] overflow-hidden shrink-0"
          alt=""
          src="/facebook-1.svg"
        />
        <img
          className="cursor-pointer relative w-[15px] h-[15px] overflow-hidden shrink-0"
          alt=""
          src="/instagram-1.svg"
        />
      </div>
      <img
        className="absolute top-[54px] left-[40px] w-16 h-[22px] object-cover"
        alt=""
        src="/frame-45-2@2x.png"
      />
      <div className="absolute top-[78px] left-[827px] w-[266px] h-[115px] text-[34px] text-gray-100">
        <div className="absolute top-[49px] left-[0px] leading-[130%] capitalize font-medium">
          <span>{`Welcome `}</span>
          <span className="text-lightseagreen">back!</span>
        </div>
        <img
          className="absolute top-[0px] left-[calc(50%_-_30px)] w-[61px] h-[49px] object-cover"
          alt=""
          src="/petals-1@2x.png"
        />
        <div className="absolute top-[93px] left-[57px] text-sm leading-[160%] font-inter text-slategray">
          Glad to see you, Again!
        </div>
      </div>
      <Form.Group className="w-[360px] [border:none] bg-[transparent] absolute top-[290px] left-[780px]">
        <Form.Control type="text" value = {maskedText} onChange={handleInputChange}  placeholder="Enter your password " className="w-[360px] p-3 opacity-45 border border-gray-600 rounded-lg" />
        <img
        src={Vector}
        alt="/"
        className="absolute -right-3  top-1/2 transform -translate-y-1/2 h-2.5 cursor-pointer"
        onClick={handleImageClick}
        />
      </Form.Group>
      <Button
        className="bg-black-500 shadow-lg shadow-gray-500/100 cursor-pointer w-[385px] absolute top-[398px] left-[780px] rounded-lg text-white bg-black bg-opacity-90 gap-10 p-3"
        
      >
        Log In
      </Button>
      <Form.Group className="w-[360px]  bg-[transparent] absolute top-[219px] left-[780px]">
        {/* <Form.Label>Enter your email</Form.Label> */}
        <Form.Control type="text" placeholder="Enter your email" className="w-[360px] p-3 opacity-45 border border-gray-600 rounded-lg"/>
      </Form.Group>
      <div className="absolute top-[523px] left-[calc(50%_+_165px)] inline-block w-[236px] h-4 text-sm font-inter">
        <span>
          <span>
            <span>Don’t have an account yet?</span>
            <span className="text-dimgray">{` `}</span>
          </span>
          <span className="font-medium text-[12px] text-dimgray">
            <span className="text-lightseagreen cursor-pointer">Sign Up</span>
          </span>
        </span>
        <span className="font-medium text-[16px] text-dimgray">
          <span>{` `}</span>
        </span>
      </div>
      {/* <div className="absolute top-[589px] left-[424px] bg-gainsboro w-[5px] h-5 [transform:_rotate(180deg)] [transform-origin:0_0]" /> */}
      <div className="absolute top-[345px] left-[1062px] font-inter opacity-[0.5] cursor-pointer">
        Forgot Password?
      </div>
      
    </div>
  );
};

export default X610ChromeSize;
