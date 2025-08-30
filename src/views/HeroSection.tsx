import { useTranslation } from "react-i18next";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <SimpleGrid>
      <Flex gap="1rem">
        <Flex flex="1" direction="column" gap="1rem">
          <Heading fontWeight="bold" size="5xl">
            {t("Hi, I'm Sovannarith")} {""}👋
          </Heading>
          <Text>
            {t(
              "I love transforming concepts into beautiful, functional websites. From sleek layouts to seamless interactions, I bring creativity and code together to craft experiences that inspire."
            )}
          </Text>
        </Flex>
        <Box boxSize="180px" border="1px solid #000" bg="pink">
          <Image src="" alt="Hi" width="100%" height="100%" />
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default HeroSection;
