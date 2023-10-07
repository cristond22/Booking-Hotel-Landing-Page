import React from "react";

import BookinUIComponent from "./BookingUIComponent.jsx";

import { Element } from "react-scroll";

const Homepage = () => {
  return (
    <Element name="homepage" className="w-screen">
      <div >
       
      <div className="container mx-auto rounded-xl mh-auto w-[50.75rem] px-12 p-[0rem] flex center  ">

                <img src="./visaelectron.svg" alt="visa" className="w-[6.5rem] h-[3.5rem]"/>
                <img src="./paypal.svg" alt="paypal" className="w-[6.5rem] h-[3.5rem]"/>
                <img src="./mastercard.svg" alt="mastercard" className="w-[6.5rem] h-[3.5rem]"/>
                <img src="./discover.svg" alt="discover" className="w-[6.5rem] h-[3.5rem]"/>
                <img src="./stripe.svg" alt="stripe" className="w-[6.5rem] h-[3.5rem]"/>
                <img src="./lemonsqueezy.svg" alt="lemonsqueezy" className="w-[6.5rem] h-[3.5rem] "/>

            </div>
        </div>
    </Element>
  );
};

export default Homepage;
