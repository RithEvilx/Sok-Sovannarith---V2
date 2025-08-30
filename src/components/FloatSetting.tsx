import { Box, Flex, Float, HStack, IconButton } from "@chakra-ui/react";
// Components
import { useColorMode, useColorModeValue } from "./ui/color-mode";
// Icons
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const FloatSetting = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const panelBg = useColorModeValue("white", "gray.800");
  const panelBorder = useColorModeValue("gray.200", "gray.700");

  return (
    <Float top="49px" right="100px">
      <Flex align="center" gap="3" bg={panelBg} borderWidth="1px" borderColor={panelBorder} rounded="md" shadow="sm" px="3" py="2">
        <Box>Language</Box>
        <HStack>
          <IconButton aria-label="Toggle color mode" variant="ghost" onClick={toggleColorMode} rounded="full">
            {colorMode === "dark" ? <MdOutlineLightMode size="2rem" /> : <MdOutlineDarkMode size="2rem" />}
          </IconButton>
        </HStack>
      </Flex>
    </Float>
  );
};

export default FloatSetting;
