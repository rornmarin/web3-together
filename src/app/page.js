import { Button } from "@/components/Button";
import { ButtonLearnMore } from "@/components/ButtonLearnMore";
import { AnimatedBackgroundLogo } from "@/components/home/AnimatedBackgroundLogo";
import { Card } from "@/components/home/Card";
import Link from "next/link";


export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
        <section className="">
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
              <Button label='Explore Now' className={'duration-100 hover:bg-[#F2A93B]/80'}/>
            </Link>
            <Link href={'#'}>
              <ButtonLearnMore />
            </Link>
          </div>
          <div className="mt-[60px]">
            <Card />
          </div>
        </section>
        <section className="flex justify-end max-lg:absolute max-lg:opacity-40 -z-10 max-lg:w-full">
          <AnimatedBackgroundLogo />
        </section>
      </div>
    </div>
  )
}
