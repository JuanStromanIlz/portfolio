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
} from "@chakra-ui/react";
import { FaGripLines } from "react-icons/fa";
import { Link as LinkRRM } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      maxWidth={1200}
      mx={"auto"}
      p={3}
      position={"sticky"}
      top={0}
      width={"100%"}
      zIndex={"1024"}
    >
      <Flex>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            variant={"ghost"}
            icon={<FaGripLines size={32} />}
            onClick={onOpen}
          />
        </Box>
        <Flex direction={"row"} display={{ base: "none", md: "block" }}>
          <Link as={LinkRRM} fontSize={"lg"} fontWeight={"bold"} to="/works">
            WORKS
          </Link>
          <Link
            as={LinkRRM}
            fontSize={"lg"}
            fontWeight={"bold"}
            to="/about"
            ml={3}
          >
            ABOUT
          </Link>
        </Flex>
      </Flex>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bg={"black"}>
          <DrawerHeader>
            <IconButton
              variant={"ghost"}
              icon={<FaGripLines size={32} />}
              onClick={onClose}
              color={"white"}
            />
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              <Text
                as={Link}
                color={"white"}
                fontSize={"4xl"}
                fontWeight={"bold"}
                to="/works"
              >
                WORKS
              </Text>
              <Text
                as={Link}
                color={"white"}
                fontSize={"4xl"}
                fontWeight={"bold"}
                to="/about"
              >
                ABOUT
              </Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
