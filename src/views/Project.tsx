import { useTranslation } from "react-i18next";
import { Badge, Box, Flex, GridItem, Heading, Image, SimpleGrid, Tabs, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { DevelopmentProjectData } from "@/constants/data";
// Import Image
import MyProfile from "@/assets/imgs/my_profile.webp";

const Project = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex direction="column" gap="0.75rem">
        <Flex direction="column" alignItems="center" gap="1.5rem">
          <Badge
            fontSize="18px"
            fontWeight="medium"
            px="1rem"
            py="0.75rem"
            bg={colorMode === "dark" ? "#fff" : "#000"}
            color={colorMode === "dark" ? "#000" : "#fff"}
            width="fit-content"
          >
            {t("My Projects")}
          </Badge>
          <Heading fontSize="4xl" fontWeight="bold">
            Check out my lastest works
          </Heading>
          <Text color="#bfbfbf" fontSize="18px" textAlign="center">
            I developed and designed websites, from simple pages to advanced web applications. Here are a few of my projects.
          </Text>
        </Flex>
        <SimpleGrid mt="2rem">
          <Tabs.Root defaultValue="development" variant="plain">
            <Tabs.List bg="bg.muted" rounded="l3" p="1" width="100%" mb="1rem">
              <Tabs.Trigger value="development" flex={1}>
                <Flex justifyContent="center" width="100%">
                  Development
                </Flex>
              </Tabs.Trigger>
              <Tabs.Trigger value="miniProject" flex={1}>
                <Flex justifyContent="center" width="100%">
                  Mini Project
                </Flex>
              </Tabs.Trigger>

              <Tabs.Indicator rounded="l2" />
            </Tabs.List>
            <Tabs.Content value="development">
              <SimpleGrid columns={2}>
                {DevelopmentProjectData.map((development, index) => (
                  <GridItem key={index} border="1px solid #e5e5e5" rounded="md" _hover={{ boxShadow: "md" }} transition="all 0.5s" cursor="pointer">
                    <Flex direction="column">
                      <Box height="250px">
                        <Image src={MyProfile} alt={development.title} loading="lazy" width="100%" height="100%" objectFit="cover" />
                      </Box>
                      {/* Content */}
                      <Flex direction="column" gap="0.25rem" padding="0.75rem">
                        <Text fontWeight="semibold">{development.title}</Text>
                        <Text color="#a0a0a0">{development.date}</Text>
                        <Text color="#bfbfbf">{development.description}</Text>
                        <Flex flexWrap="wrap" gap="0.5rem">
                          {development.tech.map((tech, idx) => (
                            <Badge key={idx} px="0.25rem" border="1px solid #eee" variant="subtle">
                              {tech}
                            </Badge>
                          ))}
                        </Flex>
                        <Flex>{development.demo}</Flex>
                      </Flex>
                    </Flex>
                  </GridItem>
                ))}
              </SimpleGrid>
            </Tabs.Content>
            <Tabs.Content value="miniProject">Mini Project</Tabs.Content>
          </Tabs.Root>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Project;
