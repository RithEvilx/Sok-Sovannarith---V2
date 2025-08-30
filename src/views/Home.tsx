import { SimpleGrid } from "@chakra-ui/react";
// Components
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <SimpleGrid gap="3rem">
      <HeroSection />
      <AboutMe />
    </SimpleGrid>
  );
};

export default Home;
