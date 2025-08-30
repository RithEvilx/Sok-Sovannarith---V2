import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <SimpleGrid>
      <Flex>
        <Box>
          <Heading fontWeight="bold" size="4xl">
            Hi, I'm Rith
          </Heading>
          <Text>
            I love transforming concepts into beautiful, functional websites. From sleek layouts to seamless interactions, I bring creativity and code
            together to craft experiences that inspire.
          </Text>
        </Box>
        <Box boxSize="100px" border="1px solid #000">
          <Image src="" alt="Hi" width="100%" height="100%" />
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default HeroSection;
