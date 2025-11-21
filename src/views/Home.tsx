import { SimpleGrid } from "@chakra-ui/react";
// Components
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skill from "./Skill";
import Footer from "./Footer";
import Project from "./Project";

const Home = () => {
  return (
    <SimpleGrid gap="3rem" paddingInline={{ base: "1.5rem", md: "6rem" }}>
      <HeroSection />
      <AboutMe />
      <WorkExperience />
      <Education />
      <Skill />
      <Project />
      <Footer />
    </SimpleGrid>
  );
};

export default Home;
