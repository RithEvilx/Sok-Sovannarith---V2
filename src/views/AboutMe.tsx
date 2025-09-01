import { useTranslation } from "react-i18next";
import { Flex, Heading, Text } from "@chakra-ui/react";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <Flex direction="column" gap="0.75rem">
      <Heading size="xl">{t("About Me")}</Heading>
      <Text>
        {t(
          "I graduated in May 2024 with a Bachelor's degree in Computer Science from the Royal University of Phnom Penh. Shortly after, I landed my first job at UDAYA Technology as a Frontend Developer, where I apply my skills in creating clean, functional, and engaging web experiences."
        )}
      </Text>
    </Flex>
  );
};

export default AboutMe;
