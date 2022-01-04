import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
  Text,
  Link,
  Tag,
} from "@chakra-ui/react";
import {
  FaGripLines,
  FaBriefcase,
  FaUser,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { Link as LinkRRM } from "react-router-dom";

const NavTag = ({ children, ...props }) => (
  <Tag
    size={"lg"}
    width={"fit-content"}
    color={"gray.800"}
    bg={"transparent"}
    borderRadius={"2xl"}
    gap={2}
    fontSize={"lg"}
    fontWeight={"bold"}
    _hover={{
      color: "gray.100",
      bg: "gray.800",
    }}
    {...props}
  >
    {children}
  </Tag>
);

const Navbar = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      {...props}
      p={3}
      position={{ base: "sticky", md: "inherit" }}
      top={0}
      width={"100%"}
      zIndex={"1024"}
    >
      <Flex
        direction={"row"}
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
      >
        <Box>
          <NavTag as={LinkRRM} to="/works">
            <FaBriefcase />
            Works
          </NavTag>
          <NavTag as={LinkRRM} to="/about" ml={2}>
            <FaUser />
            About
          </NavTag>
        </Box>
        <Box>
          <NavTag
            as={"a"}
            target={"_blank"}
            href={"https://www.linkedin.com/in/jstromanilz/"}
            ml={2}
          >
            <FaLinkedin />
            Linkedin
          </NavTag>
          <NavTag
            as={"a"}
            target={"_blank"}
            href={"https://github.com/JuanStromanIlz"}
            ml={2}
          >
            <FaGithub />
            Github
          </NavTag>
          <NavTag
            as={"a"}
            target={"_blank"}
            href={"mailto:juanstroman@gmail.com"}
            ml={2}
          >
            <FaEnvelope />
            Email
          </NavTag>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
