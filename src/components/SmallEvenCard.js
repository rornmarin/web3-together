"use client";
import React, { Component } from "react";

export const SmallEvenCard = ({ img }) => {
  return (
    <div>
      <div className="absolute">
        <img
          className="absolute bottom-[210px] w-[295px] h-[172px] rounded-lg"
          src={img}
        />
        <div className="h-[253px] w-[295px] bg-white bg-opacity-10 rounded-lg ">
          <div className="absolute top-[60px] mx-[13px]">
            <h1 className="font-inter font-bold text-xl mb-2 tracking-widest">
              TTN Event
            </h1>
            <p className="font-inter font-normal text-base leading-7 tracking-wider">
              If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each
              NFT Project
            </p>
            <div className="flex flex-row justify-between pt-[35px] ">
              <h1 className="font-inter font-normal text-base leading-7 tracking-wider text-[#FFFFFF] opacity-50">
                27 March 2023
              </h1>
              <h1 className="text-[#F2A93B] font-inter font-bold text-base leading-7 tracking-wider">
                Join Now
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
