import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Flex, Link as ChakraExternalLink } from "@chakra-ui/react";
// Components
import { Tooltip } from "../ui/tooltip";
import { useColorModeValue } from "../ui/color-mode";
// Constants
import { GitHubLink, LinkedinLInk, YoutubeLink } from "@/constants/app";
// Icons
import { FaGithub, FaHouse, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Navbar = () => {
  const { t } = useTranslation();

  // Dynamic (light, dark) values
  const navBg = useColorModeValue("white", "gray.800");
  const navColor = useColorModeValue("gray.900", "gray.100");
  const navBorder = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("gray.200", "whiteAlpha.200");
  const iconColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex
      as="nav"
      role="navigation"
      position="fixed"
      bottom="20px"
      left="50%"
      transform="translateX(-50%)"
      bg={navBg}
      color={navColor}
      px="3"
      py="2"
      borderRadius="full"
      boxShadow="md"
      borderWidth="1px"
      borderColor={navBorder}
      zIndex="docked"
      backdropFilter="auto"
      backdropBlur="8px"
    >
      <Box as="ul" m="0" p="0" display="flex" gap="0.65rem" listStyleType="none" alignItems="center">
        <Box as="li">
          <Link to="/" aria-label="Home">
            <Tooltip content={t("home")}>
              <Box
                p="0.5rem"
                borderRadius="full"
                transition="transform 0.15s ease-in-out, background 0.15s ease-in-out"
                bg={hoverBg}
                _hover={{ transform: "scale(1.08)", bg: hoverBg }}
              >
                <Box as={FaHouse} boxSize="5" color={iconColor} />
              </Box>
            </Tooltip>
          </Link>
        </Box>

        <Box as="li">
          <Tooltip content={t("linkedin")}>
            <ChakraExternalLink
              href={LinkedinLInk}
              aria-label="LinkedIn"
              target="_blank"
              transition="transform 0.15s ease-in-out, background 0.15s ease-in-out"
              p="0.5rem"
              borderRadius="full"
              _hover={{ transform: "scale(1.08)", bg: hoverBg }}
            >
              <Box as={FaLinkedin} boxSize="5" color={iconColor} />
            </ChakraExternalLink>
          </Tooltip>
        </Box>

        <Box as="li">
          <Tooltip content={t("github")}>
            <ChakraExternalLink
              href={GitHubLink}
              aria-label="GitHub"
              target="_blank"
              transition="transform 0.15s ease-in-out, background 0.15s ease-in-out"
              p="0.5rem"
              borderRadius="full"
              _hover={{ transform: "scale(1.08)", bg: hoverBg }}
            >
              <Box as={FaGithub} boxSize="5" color={iconColor} />
            </ChakraExternalLink>
          </Tooltip>
        </Box>

        <Box as="li">
          <Tooltip content={t("youtube")}>
            <ChakraExternalLink
              href={YoutubeLink}
              aria-label="YouTube"
              target="_blank"
              transition="transform 0.15s ease-in-out, background 0.15s ease-in-out"
              p="0.5rem"
              borderRadius="full"
              _hover={{ transform: "scale(1.08)", bg: hoverBg }}
            >
              <Box as={FaYoutube} boxSize="5" color={iconColor} />
            </ChakraExternalLink>
          </Tooltip>
        </Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
