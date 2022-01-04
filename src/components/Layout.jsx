import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <Flex direction={"column"} gap={6} minHeight={"100vh"}>
    <Navbar px={{ base: 3, lg: 6 }} />
    <Box px={{ base: 3, lg: 6 }}>{children}</Box>
    <Footer py={12} px={{ base: 3, lg: 6 }} mt={"auto"} />
  </Flex>
);

export default Layout;
