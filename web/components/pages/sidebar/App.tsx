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
} from "@chakra-ui/react";
import CloseIcon from "@web/components/atoms/Icons/CloseIcon";
import MenuIcon from "@web/components/atoms/Icons/MenuIcon";

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
          <Center h="76px" bg="white" flexShrink="0">
            <Text>Header</Text>
          </Center>
          <IconButton
            position="absolute"
            top="0"
            right="0"
            aria-label=""
            bg="turquoise"
            borderRadius="0"
            size="sm"
            onClick={hideSidebar}
            icon={<CloseIcon />}
          />
        </Box>

        <Box bg="#F5F5F5" h="0" flexGrow="1" position="relative">
          <Tabs align="center" position="absolute" w="100%" h="100%">
            <Flex direction="column" position="absolute" w="100%" h="100%">
              <TabList bg="white" flexShrink="0" h="40px" color="gray.400">
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>
              <TabPanels overflow="auto">
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
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
