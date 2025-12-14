import { useTranslation } from "react-i18next";
import { Badge, Flex, Heading } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { SkillsData } from "@/constants/data";

const Skill = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Flex direction="column" gap="0.75rem">
      <Heading size="xl">{t("skills")}</Heading>
      <Flex flexWrap="wrap" gap="0.5rem">
        {SkillsData.map((skill, index) => (
          <Badge
            key={index}
            px="0.5rem"
            bg={colorMode === "dark" ? "#fff" : "#000"}
            color={colorMode === "dark" ? "#000" : "#fff"}
            _hover={{ transform: "translateY(-5px)" }}
            transition="all 0.3s linear"
          >
            {skill}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};

export default Skill;
