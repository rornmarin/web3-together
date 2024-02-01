import { SmallEvenCard } from "@/components/SmallEvenCard";
import React from "react";


const Community = () => {
  return (
    <div>
      <h1 className="text-center font-inter font-bold text-3xl leading-10 tracking-wider mb-4">
        Community
      </h1>
      <div>
        <SmallEvenCard
          img="https://s3-alpha-sig.figma.com/img/1bc5/cc4c/c0847ed3e7424e2c02351b7eef36211d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4PdcvReLaP5i0QLiSb8s8Dztngsvqi~6yCgs2s5wWaEiCsm-wTT36PjtrPN8RQTZkXt~09OLH0gRRDakM3a9CRWs8ZL~OP3Yf17pI3F0oWltqLDzB~EBkzbkZIt6l4rwuvgP5wiCt983aSGerPPDDasBSG0yIXTRMvpdskubEQGwaRQ-wt3e58X~n-gqJUCIf65pBDBMDG3daY7KtydnMSF19D3zetWQjlJFs3d9yvwgC1pmpIe~ZaTkcROrGd6R7C5l6yoYZOvarE1y3PSLgHjIOGE1CpjXgFXA1Rz~F46kNzEfuIbO3pCN8YgU~laTUSP3dXG1JM4u1xuA0hFYQ__"
          title="TTN Event"
          description="If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project"
          date="27 March 2023"
          joinLink="/join"
        />
      </div>
    </div>
  );
};

export default Community;
