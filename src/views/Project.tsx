import { useTranslation } from "react-i18next";
import { Badge, Box, Flex, GridItem, Heading, Image, Link, SimpleGrid, Tabs, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { FeaturedProjectData } from "@/constants/data";
// Import Image
import { FaGithub, FaLink } from "react-icons/fa6";
import { Tooltip } from "@/components/ui/tooltip";

const Project = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex direction="column" gap="0.75rem">
        <Flex direction="column" alignItems="center" gap={{ base: "0.75rem", sm: "1rem", md: "1.5rem" }}>
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
          <Heading fontSize={{ base: "xl", sm: "2xl", md: "4xl" }} fontWeight="bold">
            Check out my lastest works
          </Heading>
          <Text color="#bfbfbf" fontSize={{ base: "14px", md: "18px" }} textAlign="center">
            I developed and designed websites, from simple pages to advanced web applications. Here are a few of my projects.
          </Text>
        </Flex>
        <SimpleGrid mt={{ base: "1rem", md: "2rem" }}>
          <Tabs.Root defaultValue="featuredProject" variant="plain">
            <Tabs.List bg="bg.muted" rounded="l3" p="1" width="100%" mb="1rem">
              <Tabs.Trigger value="featuredProject" flex={1}>
                <Flex justifyContent="center" width="100%">
                  Featured Project
                </Flex>
              </Tabs.Trigger>
              <Tabs.Trigger value="sideProject" flex={1}>
                <Flex justifyContent="center" width="100%">
                  Side Project
                </Flex>
              </Tabs.Trigger>

              <Tabs.Indicator rounded="l2" />
            </Tabs.List>
            <Tabs.Content value="featuredProject">
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "1rem", md: "0.5rem" }}>
                {FeaturedProjectData.map((featuredProject, index) => (
                  <GridItem
                    key={index}
                    border="1px solid #e5e5e5"
                    rounded="md"
                    transition="all 0.5s"
                    overflow="hidden"
                    _hover={{
                      boxShadow: colorMode === "dark" ? "0px 0px 15px #eee, 0px 0px 15px #eee inset" : "0px 0px 0 #0a0a0a, 0px 0px 15px #0a0a0a50",
                    }}
                  >
                    <Flex direction="column">
                      <Box height={{ base: "200px", md: "250px" }} overflow="hidden" cursor="pointer">
                        {featuredProject.image !== "" ? (
                          <Image
                            src={featuredProject.image}
                            alt={featuredProject.title}
                            loading="lazy"
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            bg="#eee"
                          />
                        ) : (
                          <Flex
                            justifyContent="center"
                            alignItems="center"
                            height="100%"
                            bg="#eee"
                            color="#bfbfbf"
                            fontSize={{ base: "14px", md: "16px" }}
                          >
                            No Image
                          </Flex>
                        )}
                      </Box>
                      {/* Content */}
                      <Flex direction="column" padding="0.5rem 0.75rem 0.75rem">
                        <Flex direction="column" justifyContent="space-between" alignItems="flex-start">
                          <Text fontWeight="bold" fontSize={{ base: "16px", md: "18px" }} lineHeight={1.25}>
                            {featuredProject.title}
                          </Text>
                          <Text fontSize="14px">{featuredProject.date}</Text>
                          <Tooltip content={featuredProject.description} showArrow>
                            <Text color="#bfbfbf" lineClamp={2} marginBlock="0.5rem" fontSize="14px">
                              {featuredProject.description}
                            </Text>
                          </Tooltip>
                          <Flex flexWrap="wrap" gap="0.5rem" marginBlock="0.25rem 0.75rem">
                            {featuredProject.tech.map((tech, idx) => (
                              <Badge key={idx} px="0.25rem" border="1px solid #eee" variant="subtle">
                                {tech}
                              </Badge>
                            ))}
                          </Flex>
                          <Flex gap="0.35rem">
                            <Link href={featuredProject.demo} target="_blank" outline="none">
                              <Badge
                                px="0.65rem"
                                py="0.35rem"
                                bg={colorMode === "dark" ? "#fff" : "#000"}
                                color={colorMode === "dark" ? "#000" : "#fff"}
                                _hover={{ transform: "translateY(-3px)" }}
                                transition="all 0.3s linear"
                              >
                                <FaLink />
                                Demo
                              </Badge>
                            </Link>
                            {featuredProject.github && (
                              <Link href={featuredProject.github} target="_blank" outline="none">
                                <Badge
                                  px="0.65rem"
                                  py="0.35rem"
                                  bg={colorMode === "dark" ? "#fff" : "#000"}
                                  color={colorMode === "dark" ? "#000" : "#fff"}
                                  _hover={{ transform: "translateY(-3px)" }}
                                  transition="all 0.3s linear"
                                >
                                  <FaGithub />
                                  RithEvilx
                                </Badge>
                              </Link>
                            )}
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </GridItem>
                ))}
              </SimpleGrid>
            </Tabs.Content>
            <Tabs.Content value="sideProject">Side Project</Tabs.Content>
          </Tabs.Root>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Project;
