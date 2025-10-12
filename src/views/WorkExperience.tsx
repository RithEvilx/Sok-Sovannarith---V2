import { useTranslation } from "react-i18next";
import { AbsoluteCenter, Accordion, Box, Flex, Heading, Image, Span, Text } from "@chakra-ui/react";
// Import Style
import { lightText } from "@/constants/styles";
// Data
import { WorkExperienceData } from "@/constants/data";

const WorkExperience = () => {
  const { t } = useTranslation();
  return (
    <Flex direction="column" gap="0.75rem">
      <Heading size="xl">{t("Work Experience")}</Heading>
      <Flex direction="column">
        <Accordion.Root spaceY="4" variant="plain" collapsible>
          {WorkExperienceData.map((item, index) => (
            <Accordion.Item key={index} value={`${index}`}>
              <Flex position="relative">
                <Accordion.ItemTrigger cursor="pointer">
                  <Flex flex="1" alignItems="flex-start" fontWeight="bold" gap="0.5rem">
                    <Box boxSize="30px" marginLeft="0.5rem">
                      <Image width="100%" height="100%" objectFit="contain" src={item.image} alt={item.image} loading="lazy" rounded="sm" />
                    </Box>
                    <Flex direction="column" gap="0">
                      <Text lineHeight={1}>{t(`${item.title}`)}</Text>
                      <Flex direction="column" gap="0">
                        <Span fontSize="0.785rem" color={lightText}>
                          {t(item.role)}
                        </Span>
                        <Text display={{ base: "block", md: "none" }} color={lightText} fontWeight="bold" fontSize="0.75rem" lineHeight={1}>
                          {item.date}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <AbsoluteCenter axis="vertical" insetEnd="0" pb="1.8rem" display={{ base: "none", md: "block" }}>
                    <Text color={lightText} fontWeight="bold" fontSize={{ base: "0.75rem", md: "0.875rem" }} mt="0.125rem">
                      {item.date}
                    </Text>
                  </AbsoluteCenter>
                </Accordion.ItemTrigger>
              </Flex>
              <Accordion.ItemContent paddingLeft="3.6rem" mt="0.35rem">
                <Accordion.ItemBody fontSize="0.875rem">
                  {item.description?.map((d, dIndex) => (
                    <Box as="ul" listStyle="disc" key={dIndex} listStylePosition="inside">
                      <li>{`${t(d)}`}</li>
                    </Box>
                  ))}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Flex>
    </Flex>
  );
};

export default WorkExperience;
