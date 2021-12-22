import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Tooltip,
  LinkOverlay,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <Box bg={"gray.100"} px={3} py={6}>
    <Flex
      direction={"column"}
      justifyContent={"center"}
      gap={3}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Box>
        <Text>Juan Stroman Ilz {new Date().getFullYear()}</Text>
      </Box>
      <HStack gap={3}>
        <Tooltip hasArrow label="JuanStromanIlz">
          <IconButton
            variant={"link"}
            as={"a"}
            href={"https://github.com/JuanStromanIlz"}
            target={"_blank"}
            icon={<FaGithub />}
          ></IconButton>
        </Tooltip>
        <Tooltip hasArrow label="jstromanilz">
          <IconButton
            variant={"link"}
            as={"a"}
            href={"https://www.linkedin.com/in/jstromanilz/"}
            target={"_blank"}
            icon={<FaLinkedin />}
          ></IconButton>
        </Tooltip>
        <Tooltip hasArrow label="juanstroman@gmail.com">
          <IconButton
            as={"a"}
            href={"mailto:juanstroman@gmail.com"}
            target={"_blank"}
            variant={"link"}
            icon={<FaEnvelope />}
          ></IconButton>
        </Tooltip>
      </HStack>
    </Flex>
  </Box>
);

export default Footer;
