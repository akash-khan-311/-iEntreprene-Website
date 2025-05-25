"use server";
import Container from "../Shared/Container";
import SplitText from "../ui/SplitText/SplitText";

const Hero = () => {
  return (
    <Container>
      <SplitText
      
        text="Transforming Challenges into Scalable, Impact-Driven Solutions for Digital Growth"
        className="text-3xl md:text-4xl lg:text-7xl font-semibold dark:text-gray-800 text-gray-100"
       
      />
    </Container>
  );
};

export default Hero;
