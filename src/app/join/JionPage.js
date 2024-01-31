import React from "react";
import { EventCard } from "@/components/EvenCard";
import { SmallEvenCard } from "@/components/SmallEvenCard";

export const JoinPage = ({ Cardimg, title, discription }) => {
  return (
    <div className="w-full h-[1306px] bg-[#19173D] flex justify-center">
      <div className="">
        {/* <EventCard
          cardimg="https://s3-alpha-sig.figma.com/img/6580/2030/ab0c0f9c621da4c0960285393d080982?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CjUMhg~ifhwjTXFJBdLnXhqk-~kflYLHDkWLH0OKFI~uAJGVoPUWaap4X43NFey58iT7U2fYOVLBDaSQ9rCnvf102cBPGz2o8FiXqaR1vHqVVgxE1kJnQV72fITx5V3GqxYWSEJnStvVR5ng5Lc-1Edgro55SySIkhbJXbAYbZr08ONPNpED3zXHjUOWUrlEhLNJCjMVZDzpauaEPSGb2NHiT1YOfyX6p9j4fkhgz4pBdmh-8XFWsQxRsItcIpGbm1dWJRcE1nBE1~hB74tQmrmjhlZ3DTv7DQJ1XkMEjFsoIludvu05p4cAbWoZvANH7CuXwh8kZSTt~-R8b1AZ0w__"
          title={"Out Talking Event"}
          discription={
            " If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project launched by 99xclub team. Minimum 12 NFT projects will belaunched by 99xclub team in span of 3 years."
          }
        />
        <SmallEvenCard /> */}
        <h1 className="w-[590px] justify-center text-center font-inter font-bold text-2xl mb-2 tracking-widest">
          If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT
          Project
        </h1>
        <div className="grid grid-cols-2 gap-0 p-20">
          <div>
            <img
              className="w-[610px] h-[407px] rounded-lg"
              src="https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__"
            ></img>
            <div className="flex justify-between ">
              <div className="absolute top-[930px]">
                <SmallEvenCard
                  img={
                    "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__"
                  }
                />
              </div>
              <div className="absolute top-[930px] left-[623px]">
                <SmallEvenCard
                  img={
                    "https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__"
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-[587px]">
            <h1 className="font-sans text-base text-white tracking-wider leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </h1>
            <h1 className="font-inter font-bold text-xl leading-[40px] tracking-widest">
              How can I join?
            </h1>
            <h1 className="font-sans text-base leading-loose text-white tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </h1>
            <h1 className="font-inter font-bold text-xl leading-[40px] tracking-widest">
              Timeline
            </h1>
            <h1 className="font-sans text-base text-white tracking-wider leading-loose">
              27 March 2023: Open application 02 May 2023: Deadline of the
              300-word proposal submission 13 June 2023: Submission of first
              paper draft 13 July 2023: Final papers September 2023: Publication
            </h1>
            <h1 className="font-sans text-base text-white">
              <span className="font-inter font-bold text-xl leading-[40px] tracking-widest">
                How can apply:
              </span>
              https//:www.event.com
            </h1>
            <h1 className="font-sans text-base text-white tracking-wider leading-loose">
              <span className="font-inter font-bold text-xl leading-[40px] tracking-widest">
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
