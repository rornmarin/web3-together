"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const SmallEvenCard = ({
  img,
  title,
  description,
  date,
  joinLink,
  className,
}) => {
  const pathname = usePathname();
  return (
    <div>
      <div className={`${className ? className : "relative h-96 w-96"} `}>
        <img
          className="flex bottom-80 z-30 h-44 w-96 rounded-lg object-cover absolute"
          src={img}
          alt="Event Image"
        />
        <div className="h-64 w-96 bg-white bg-opacity-10 rounded-lg relative">
          <div className="absolute w-96 top-20 mx-5">
            <h1 className="font-inter font-bold text-xl mb-2 tracking-widest">
              {title}
            </h1>
            <p className="w-72 font-inter font-normal text-base leading-7 tracking-wider">
              {description}
            </p>
            <div className="flex flex-row justify-between pt-5">
              <h1 className="font-inter font-normal text-base leading-7 text-white text-opacity-40 tracking-wider">
                {date}
              </h1>
              <Link
                href={joinLink}
                className="text-[#F2A93B] mr-10 font-inter font-bold text-base leading-7 tracking-wider"
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
