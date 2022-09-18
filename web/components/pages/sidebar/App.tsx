import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Center,
  Text,
  Box,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import LogoIcon from "@web/components/atoms/Icons/LogoIcon";
import MenuIcon from "@web/components/atoms/Icons/MenuIcon";
import PencilIcon from "@web/components/atoms/Icons/PencilIcon";
import PanelOne from "@web/components/molecules/PanelOne";
import PanelThree from "@web/components/molecules/PanelThree";
import PanelTwo from "@web/components/molecules/PanelTwo";

import useHooks from "./hooks";
import theme from "./theme";

const App = () => {
  const { isSidebarShown, hideSidebar, showSidebar } = useHooks();

  return (
    <ChakraProvider theme={theme}>
      <IconButton
        position="absolute"
        top="0"
        left="0"
        aria-label=""
        bg="white"
        color="turquoise"
        borderRadius="0"
        size="md"
        transform={
          isSidebarShown ? "translate3d(-100%,0,0)" : "translate3d(0,0,0)"
        }
        _hover={{
          color: "white",
          background: "turquoise",
        }}
        transition="all .25s ease"
        onClick={showSidebar}
        icon={<MenuIcon />}
      />
      <Flex
        color="gray.900"
        direction="column"
        position="absolute"
        w="100%"
        minWidth="350px"
        h="100%"
        transform={
          isSidebarShown ? "translate3d(0,0,0)" : "translate3d(-100%,0,0)"
        }
        transition="all .25s ease"
        zIndex="2"
      >
        <Box>
          <Center h="76px" bg="white" flexShrink="0" pt="20px">
            <LogoIcon m="10px" />
            <Text color="turquoise.600">Project Name</Text>
          </Center>
          <CloseButton
            position="absolute"
            top="0"
            right="0"
            aria-label=""
            bg="turquoise.600"
            color="white"
            borderRadius="0"
            size="md"
            _hover={{ background: "turquoise" }}
            onClick={hideSidebar}
          />
        </Box>

        <Box bg="#F5F5F5" h="0" flexGrow="1" position="relative">
          <Tabs align="center" position="absolute" w="100%" h="100%">
            <Flex direction="column" position="absolute" w="100%" h="100%">
              <TabList bg="white" flexShrink="0" h="40px" color="gray.400">
                <Tab>
                  <PencilIcon mr="5px" />
                  <Text>One</Text>
                </Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>
              <TabPanels overflow="auto" flexGrow="1">
                <TabPanel>
                  <PanelOne />
                </TabPanel>
                <TabPanel
                  h="100%"
                  overflow="hidden"
                  display="flex"
                  flexDir="column"
                >
                  <PanelTwo />
                </TabPanel>
                <TabPanel>
                  <PanelThree />
                </TabPanel>
              </TabPanels>
            </Flex>
          </Tabs>
        </Box>
        <Center
          h="46px"
          bg="white"
          flexShrink="0"
          borderTopWidth="1px"
          borderTopColor="gray.300"
        >
          <Text>Footer</Text>
        </Center>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
