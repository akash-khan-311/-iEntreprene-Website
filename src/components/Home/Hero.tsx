"use server";
import Image from "next/image";
import Container from "../Shared/Container";
import SplitText from "../ui/SplitText/SplitText";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center h-[calc(100vh-128px)] px-10 mt-28">
        <SplitText
          text="Transforming Challenges into Scalable, Impact-Driven Solutions for Digital Growth"
          className="text-4xl md:text-5xl lg:text-6xl font-semibold   w-5/6 "
        />

        <div className="w-1/3 mt-12">
          <div className=" ">
            <div className="text-center">
              <Image
              alt="Entrepreneur"
              className="w-full h-full overflow-hidden "
              width={300}
              height={300}
              src="/images/banner-01.png"
            />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
