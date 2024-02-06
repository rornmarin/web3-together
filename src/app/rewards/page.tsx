import React from "react";
import image1 from "../../resources/rewards/image1.png";
import image2 from "../../resources/rewards/image2.png";
import { Card } from "../../components/rewards/Card";

const page = () => {
  const cardData = [
    {
      title: "Out Talking Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project launched by 99xclub team. Minimum 12 NFT projects will be launched by 99xclub team in span of 3 years.",
      image: image1,
      date: "Jun, 28, 2024",
    },
    {
      title: "Out Talking Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project launched by 99xclub team. Minimum 12 NFT projects will be launched by 99xclub team in span of 3 years.",
      image: image2,
      date: "Jun, 28, 2024",
    },
    {
      title: "Out Talking Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project launched by 99xclub team. Minimum 12 NFT projects will be launched by 99xclub team in span of 3 years.",
      image: image1,
      date: "Jun, 28, 2024",
    },
    {
      title: "Out Talking Event",
      description:
        "If you hold 1 Web3 Together Membership Pass = 1 Free NFT in Each NFT Project launched by 99xclub team. Minimum 12 NFT projects will be launched by 99xclub team in span of 3 years.",
      image: image2,
      date: "Jun, 28, 2024",
    },
  ];
  return (
    <div className="pt-10">
      <div className="grid lg:w-4/6 pb-10">
        <h1 className="font-normal md:text-lg lg:text-xl xl:text-2xl pb-5">
          NFTs: A New Way to Reward Members
        </h1>
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pb-5">
          Use NFT Rewards to Power Loyalty
        </h2>
        <p className="text-white/50 text-base font-normal">
          NFTs are quickly emerging as a new form of rewards for loyalty
          members. Brands are reaching new customers, building a new wave of
          excitement, and creating new communities of super fans. Now, you can
          offer NFT rewards at nearly every touchpoint. With Annex Cloud, you
          can add NFT rewards – with or without gamification – and create an
          entirely new kind of experience for your members.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        {cardData.map((data, index) => (
          <Card data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
