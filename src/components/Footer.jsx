import { Flex, Text, Image } from "@chakra-ui/react";

const Footer = ({ ...props }) => (
  <Flex
    direction={"row"}
    bgGradient={"linear(to-b, white, gray.200, gray.300)"}
    gap={2}
    {...props}
    justifyContent={"center"}
  >
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
      height={"12px"}
      my={"auto"}
      alt=""
    />
    <Text fontSize={"sm"}>JuanStromanIlz</Text>
    <Text fontSize={"sm"}>{new Date().getFullYear()}.</Text>
  </Flex>
);

export default Footer;
