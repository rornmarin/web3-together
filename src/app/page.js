import { Button } from "@/components/Button";
import { ButtonLearnMore } from "@/components/ButtonLearnMore";
import { Card } from "@/components/home/Card";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="px-[20px] lg:px-[100px] pb-[36px] !overflow-x-clip">
      <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
        <section className="lg:max-w-[679px]">
          <h1 className="font-bold text-[40px] leading-[50px] tracking-[5%] mb-[20px]">
            We are a small<br className="max-xl:hidden" />
            community that helps<br className="max-xl:hidden" />
            people to learn about<br className="max-xl:hidden" />
            <span className="text-[#F2A93B]"> Web3 development.</span>
          </h1>
          <p className="font-normal text-[16px] leading-[30px] tracking-[5%] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          </p>
          <div className="flex sm:items-center sm:gap-[50px] max-sm:gap-5 ">
            <Link href={'#'}>
              <Button label='Explore Now' />
            </Link>
            <Link href={'#'}>
              <ButtonLearnMore />
            </Link>
          </div>
          <div className="mt-[60px]">
            <Card />
          </div>
        </section>
        <section className="flex pt-[30px] w-[calc(100%-30px)] justify-end max-lg:absolute max-lg:pr-[30px] max-lg:opacity-40 items-start -z-10">
          <div className="relative">
            <div className="absolute border-l-[300px] border-l-transparent border-b-[500px] border-b-[#F2A93B] border-r-[310px] border-r-transparent blur-2xl -z-50 rotate-[70deg] top-[-75px] animate-pulse-slow"></div>
            <Image
              className="absolute -z-20 blur-xl top-[-40px] left-[-30px] animate-pulse"
              src={require('@/resources/shapes/ellipseV1.svg')} alt="shape1"/>
            <Image
              className="absolute -z-20 blur-xl top-[-40px] right-[-150px] animate-pulse"
              src={require('@/resources/shapes/ellipseV2.svg')} alt="shape2" />
            <Image
              className="absolute -z-20 blur-xl right-0 bottom-[-100px] animate-pulse"
              src={require('@/resources/shapes/ellipseV3.svg')} alt="shape3" />
            <Image
              className="absolute -z-20 blur-xl right-[-100px] top-[-120px] animate-pulse"
              src={require('@/resources/shapes/ellipseV4.svg')} alt="shape4" />
            <Image 
              src={require('@/resources/logo/homeLogo.svg')} alt="homepagelogo" />
          </div>
        </section>
      </div>
    </div>
  )
}
