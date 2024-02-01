"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const SmallEvenCard = ({ img, title, description, date, joinLink }) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="relative h-[376px]">
        <img
          className="flex bottom-[320px] z-30 w-[295px] h-[172px] rounded-lg object-cover absolute"
          src={img}
          alt="Event Image"
        />
        <div className="h-[253px] w-[295px] bg-white bg-opacity-10 rounded-lg relative">
          <div className="absolute top-[70px] mx-[13px]">
            <h1 className="font-inter font-bold text-xl mb-2 tracking-widest">
              {title}
            </h1>
            <p className="font-inter font-normal text-base leading-7 tracking-wider">
              {description}
            </p>
            <div className="flex flex-row justify-between pt-[25px]">
              <h1 className="font-inter font-normal text-base leading-7 text-white text-opacity-40 tracking-wider">
                {date}
              </h1>
              <Link
                href={joinLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  pathname === "/community/join" &&
                  "text-[#F2A93B] font-inter font-bold text-base leading-7 tracking-wider"
                }`}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
