import { useTranslation } from "react-i18next";
import { AbsoluteCenter, Accordion, Box, Flex, Heading, Image, Span, Text } from "@chakra-ui/react";
// Import Style
import { lightText } from "@/constants/styles";
// Import Image
import UDAYA_LOGO from "@/assets/imgs/logo/udaya-logo.png";

const WorkExperience = () => {
  const items = [
    {
      image: UDAYA_LOGO,
      title: "UDAYA Technology",
      role: "Frontend Developer Probation",
      date: "July 2025 - Present",
      description: ["Developer RMS Control Center"],
    },
    {
      image: UDAYA_LOGO,
      title: "UDAYA Technology",
      role: "Frontend Developer Intern",
      date: "Mar 2025 - June 2025",
      description: ["Design Internal Website Smart RMS Control Center", "Integrate with REST API"],
    },
  ];

  const { t } = useTranslation();
  return (
    <Flex direction="column" gap="0.75rem">
      <Heading size="xl">{t("Work Experience")}</Heading>
      <Flex direction="column">
        <Accordion.Root spaceY="4" variant="plain" collapsible>
          {items.map((item, index) => (
            <Accordion.Item key={index} value={`${index}`}>
              <Flex position="relative">
                <Accordion.ItemTrigger cursor="pointer">
                  <Flex flex="1" alignItems="flex-start" fontWeight="bold" gap="0.5rem">
                    <Image height="20px" src={item.image} alt={item.image} loading="lazy" border="1px solid #eee" rounded="sm" />
                    <Flex direction="column" gap="0">
                      <Text lineHeight={1}>{t(`${item.title}`)}</Text>
                      <Span fontSize="0.75rem" color={lightText}>
                        {item.role}
                      </Span>
                    </Flex>
                  </Flex>
                  <AbsoluteCenter axis="vertical" insetEnd="0" pb="1.8rem">
                    <Text color={lightText} fontSize="0.875rem" fontWeight="bold">
                      {item.date}
                    </Text>
                  </AbsoluteCenter>
                </Accordion.ItemTrigger>
              </Flex>
              <Accordion.ItemContent paddingLeft="3.6rem" mt="0.35rem">
                <Accordion.ItemBody fontSize="0.875rem">
                  {item.description?.map((d, dIndex) => (
                    <Box as="ul" listStyle="disc" key={dIndex} listStylePosition="inside">
                      <li>{d}</li>
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
