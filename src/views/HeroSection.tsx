import { useTranslation } from "react-i18next";
import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
// Import Image
import MyProfile from "@/assets/imgs/my_profile.webp";

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
        <Flex boxSize="150px" justifyContent="center" alignItems="center">
          <Image
            src={MyProfile}
            alt="Hi"
            loading="lazy"
            width="100%"
            height="100%"
            objectFit="cover"
            border="3px solid #eee"
            boxShadow="0px 0px 15px #eee, 0px 0px 15px #eee inset"
            rounded="lg"
          />
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};

export default HeroSection;
