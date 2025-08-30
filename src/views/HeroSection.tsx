import { useTranslation } from "react-i18next";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <SimpleGrid>
      <Flex>
        <Flex direction="column" gap="0.5rem">
          <Heading fontWeight="bold" size="5xl">
            {t("Hi, I'm Sovannarith")}
          </Heading>
          <Text>
            I love transforming concepts into beautiful, functional websites. From sleek layouts to seamless interactions, I bring creativity and code
            together to craft experiences that inspire.
          </Text>
        </Flex>
        <Box boxSize="100px" border="1px solid #000">
          <Image src="" alt="Hi" width="100%" height="100%" />
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default HeroSection;
