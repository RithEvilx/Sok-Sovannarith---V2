import { SimpleGrid } from "@chakra-ui/react";
// Components
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

const Home = () => {
  return (
    <SimpleGrid gap="3rem">
      <HeroSection />
      <AboutMe />
      <WorkExperience />
      <Education />
    </SimpleGrid>
  );
};

export default Home;
