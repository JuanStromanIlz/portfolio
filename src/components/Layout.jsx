import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <Flex direction={"column"}>
    <Navbar />
    <Box px={6}>{children}</Box>
    <Footer />
  </Flex>
);

export default Layout;
