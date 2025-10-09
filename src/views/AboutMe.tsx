import { useTranslation } from "react-i18next";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import { AboutMeData } from "@/constants/data"; // string[]

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Flex direction="column" gap="0.75rem">
      <Heading size="xl">{t("About Me")}</Heading>

      <Box as="ul" display="flex" flexDirection="column" gap="0.5rem" listStylePosition="outside" m={0} fontSize="0.875rem">
        {AboutMeData.map((key, index) => (
          <Box as="li" key={index}>
            <Text m={0}>{t(key)}</Text>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default AboutMe;
