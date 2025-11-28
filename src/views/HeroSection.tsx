import { useTranslation } from "react-i18next";
import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
// Import Image
import MyProfile from "@/assets/imgs/my_profile.webp";
import { useColorMode } from "@/components/ui/color-mode";

const HeroSection = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid>
      {/* Tablet + */}
      <Flex gap="1rem" display={{ base: "none", md: "flex" }}>
        <Flex direction="column" flex="1" gap="1rem">
          <Heading fontWeight="bold" size={{ base: "lg", md: "3xl", lg: "5xl" }}>
            {t("Hi, I'm Sovannarith")} {""}👋
          </Heading>
          <Text>
            {t(
              "I love transforming concepts into beautiful, functional websites. From sleek layouts to seamless interactions, I bring creativity and code together to craft experiences that inspire."
            )}
          </Text>
        </Flex>
        <Flex boxSize={{ base: "100px", md: "120px", lg: "150px" }} justifyContent="center" alignItems="center">
          <Image
            src={MyProfile}
            alt="Hi"
            loading="lazy"
            width="100%"
            height="100%"
            objectFit="cover"
            border="3px solid #eee"
            boxShadow={colorMode === "dark" ? "0px 0px 15px #eee, 0px 0px 15px #eee inset" : "0px 0px 15px #0a0a0a, 0px 0px 15px #0a0a0a inset"}
            rounded="lg"
          />
        </Flex>
      </Flex>
      {/* Mobile */}
      <Flex direction="column" gap="1rem" display={{ base: "flex", md: "none" }}>
        <Flex alignItems="center" justifyContent="flex-start" gap="1rem">
          <Flex boxSize={{ base: "100px", md: "120px", lg: "150px" }} justifyContent="center" alignItems="center">
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
          <Heading fontWeight="bold" size={{ base: "lg", md: "3xl", lg: "5xl" }}>
            {t("Hi, I'm Sovannarith")} {""}👋
          </Heading>
        </Flex>
        <Text>
          {t(
            "I love transforming concepts into beautiful, functional websites. From sleek layouts to seamless interactions, I bring creativity and code together to craft experiences that inspire."
          )}
        </Text>
      </Flex>
    </SimpleGrid>
  );
};

export default HeroSection;
