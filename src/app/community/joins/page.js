"use client";
import React from "react";
import { SmallEvenCard } from "@/components/SmallEvenCard";
import { usePathname } from "next/navigation";

const JoinEvent = () => {
  const pathname = usePathname();

  const handleClickBack = () => {
    window.location.href = "/community";
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-full ">
        <div className="flex flex-col items-center justify-center md:flex-row mb-5 md:mb-20">
          <h1 className="mx-auto text-center font-inter font-bold text-base md:text-base lg:text-base tracking-widest">
            If you hold 1 Web3 Together Membership <br></br>Pass = 1 Free NFT in
            Each NFT Project
          </h1>
          <button
            onClick={handleClickBack}
            className="bg-[#FFFFFF] bg-opacity-20 w-32 h-14 mr-10 md:mr-4 rounded-lg text-[#F2A93B] font-inter font-bold text-base md:text-xl leading-7 tracking-wider self-end mt-4 md:mt-0"
          >
            Back
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative mb-8 items-center justify-center md:items-center md:justify-self-end ">
            <img
              className="h-3/6  rounded-lg mb-4 mx-auto pl-72 md:pl-0"
              src="https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__"
              alt="Event Image"
            />
            <div className="mx-auto flex flex-col md:flex-row items-center justify-between md:justify-between">
              <div className="relative top-32 md:top-36 mr-0 md:mr-2">
                <SmallEvenCard
                  img="https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__"
                  title="TTN Event"
                  description="If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project"
                  date="27 March 2023"
                  joinLink="/community/join"
                />
              </div>
              <div className="relative top-36 md:top-36 ">
                <SmallEvenCard
                  img="https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__"
                  title="TTN Event"
                  description="If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project"
                  date="27 March 2023"
                  joinLink="/community/join"
                />
              </div>
            </div>
          </div>
          <div className="md:w-4/6 w-5/6 pl-3 md:pl-10 mt-72 mb-10 md:mt-0">
            <h1 className="font-sans text-base text-white tracking-wider leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </h1>
            <h1 className="mt-5 w-5/6 font-inter font-bold text-xl md:text-2xl leading-snug tracking-widest">
              How can I join?
            </h1>
            <h1 className="font-sans text-base leading-loose text-white tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </h1>
            <h1 className="mt-5 font-inter font-bold text-xl md:text-2xl leading-snug tracking-widest">
              Timeline
            </h1>
            <h1 className="w-full md:w-4/5 font-sans text-base text-white tracking-wider leading-loose">
              <ul className="list-disc pl-4">
                <li>27 March 2023: Open application</li>
                <li>
                  02 May 2023: Deadline of the 300-word proposal submission
                </li>
                <li>13 June 2023: Submission of the first paper draft</li>
                <li>13 July 2023: Final papers September</li>
                <li>2023: Publication</li>
              </ul>
            </h1>
            <h1 className="my-7 font-sans text-base text-white">
              <span className=" font-inter font-bold text-xl md:text-2xl leading-[40px] tracking-widest">
                How can apply:
              </span>
              https//:www.event.com
            </h1>
            <h1 className="w-full md:w-4/5 font-sans text-base text-white tracking-wider leading-loose">
              <span className="font-inter font-bold text-xl md:text-2xl leading-[40px] tracking-widest">
                Noted:
              </span>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinEvent;
