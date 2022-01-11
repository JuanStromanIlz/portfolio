import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
  Text,
  Tag,
  Avatar,
} from "@chakra-ui/react";
import {
  FaGripLines,
  FaBriefcase,
  FaUser,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaRegNewspaper,
} from "react-icons/fa";
import { Link as LinkRRM } from "react-router-dom";
import { useContext } from "react";
import { Admin } from "../context/Admin";

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
  const { user, signIn, signOut } = useContext(Admin);

  const toggleLogin = () => {
    if (!user) {
      signIn();
    } else {
      signOut();
    }
  };

  return (
    <Box
      {...props}
      p={3}
      position={{ base: "sticky", md: "inherit" }}
      top={0}
      width={"100%"}
      zIndex={"1024"}
    >
      <Box display={{ base: "flex", md: "none" }}>
        <IconButton
          bg={"transparent"}
          _hover={{
            bg: "transparent",
          }}
          onClick={onOpen}
          icon={<FaGripLines />}
        />
      </Box>
      <Flex
        direction={"row"}
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
      >
        <Box>
          <NavTag as={LinkRRM} to="/works">
            <FaBriefcase />
            Trabajos
          </NavTag>
          <NavTag as={LinkRRM} to="/about" ml={2}>
            <FaUser />
            Sobre mi
          </NavTag>
          {user && (
            <NavTag
              as={LinkRRM}
              to="/works/new"
              ml={2}
              color={"green"}
              _hover={{
                color: "green",
              }}
            >
              <FaRegNewspaper />
              Nuevo
            </NavTag>
          )}
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
          <Avatar
            size={"sm"}
            name={user ? user.displayName : null}
            src={user ? user.photoURL : null}
            cursor={"pointer"}
            ml={2}
            onClick={toggleLogin}
          />
        </Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size={"full"}
        onClose={onClose}
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent bg={"gray.900"} color={"gray.100"}>
          <DrawerHeader>
            <Box>
              <IconButton
                bg={"transparent"}
                _hover={{
                  bg: "transparent",
                }}
                onClick={onClose}
                icon={<FaGripLines />}
              />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction={"column"}>
              <Avatar
                name={user ? user.displayName : null}
                src={user ? user.photoURL : null}
                cursor={"pointer"}
                mb={2}
                onClick={toggleLogin}
              />
              <Text
                as={LinkRRM}
                to="/works"
                fontSize={"5xl"}
                fontWeight={"bold"}
              >
                Trabajos
              </Text>
              <Text
                as={LinkRRM}
                to="/about"
                fontSize={"5xl"}
                fontWeight={"bold"}
              >
                Sobre mi
              </Text>
              <Text
                as={LinkRRM}
                to="/works/new"
                fontSize={"5xl"}
                fontWeight={"bold"}
              >
                Nuevo
              </Text>
            </Flex>
            <Flex width={"100%"} direction={"column"} gap={2} mt={3}>
              <Text
                as={"a"}
                target={"_blank"}
                href={"https://www.linkedin.com/in/jstromanilz/"}
                fontSize={"xl"}
              >
                Linkedin
              </Text>
              <Text
                as={"a"}
                target={"_blank"}
                href={"https://github.com/JuanStromanIlz"}
                fontSize={"xl"}
              >
                Github
              </Text>
              <Text
                as={"a"}
                target={"_blank"}
                href={"mailto:juanstroman@gmail.com"}
                fontSize={"xl"}
              >
                Email
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
