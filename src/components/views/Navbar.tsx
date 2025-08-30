import { Box, Flex, Link as ChakraExternalLink } from "@chakra-ui/react";
import { FaGithub, FaHouse, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      role="navigation"
      position="fixed"
      bottom="4"
      left="50%"
      transform="translateX(-50%)"
      bg="bg"
      color="fg"
      px="3"
      py="2"
      borderRadius="full"
      boxShadow="md"
      zIndex="docked"
    >
      <Box as="ul" m="0" p="0" display="flex" gap="0.65rem" listStyleType="none" alignItems="center">
        <Box as="li">
          <Link to="/" aria-label="Home">
            <Box p="0.5rem" borderRadius="full" bg="#e7e7e7" color="#000">
              <Box as={FaHouse} boxSize="5" />
            </Box>
          </Link>
        </Box>

        <Box as="li">
          <ChakraExternalLink
            href="https://www.linkedin.com/in/your-handle"
            aria-label="LinkedIn"
            target="_blank"
            _hover={{ transform: "scale(1.08)", bg: "#e7e7e7" }}
            transition="transform 0.15s ease-in-out"
            p="0.5rem"
            borderRadius="full"
          >
            <Box as={FaLinkedin} boxSize="5" />
          </ChakraExternalLink>
        </Box>

        <Box as="li">
          <ChakraExternalLink
            href="https://github.com/your-handle"
            aria-label="GitHub"
            target="_blank"
            _hover={{ transform: "scale(1.08)", bg: "#e7e7e7" }}
            transition="transform 0.15s ease-in-out"
            p="0.5rem"
            borderRadius="full"
          >
            <Box as={FaGithub} boxSize="5" />
          </ChakraExternalLink>
        </Box>

        <Box as="li">
          <ChakraExternalLink
            href="https://youtube.com/@your-handle"
            aria-label="YouTube"
            target="_blank"
            _hover={{ transform: "scale(1.08)", bg: "#e7e7e7" }}
            transition="transform 0.15s ease-in-out"
            p="0.5rem"
            borderRadius="full"
          >
            <Box as={FaYoutube} boxSize="5" />
          </ChakraExternalLink>
        </Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
