import { Box, Flex, Heading, Tag } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterTag = ({ href, children }) => (
  <Tag
    size={"lg"}
    width={"fit-content"}
    borderRadius={"2xl"}
    as="a"
    href={href}
    target={"_blank"}
    gap={2}
  >
    {children}
  </Tag>
);

const Footer = () => (
  <Flex direction={"column"} px={3} py={6} mt={3}>
    <Heading as={"h1"} size={"lg"} mb={6}>
      Contacto:
    </Heading>
    <Flex direction={"column"} justifyContent={"flex-end"} gap={3}>
      <FooterTag href={"https://github.com/JuanStromanIlz"}>
        <FaGithub />
        JuanStromanIlz
      </FooterTag>
      <FooterTag href={"https://github.com/JuanStromanIlz"}>
        <FaLinkedin />
        jstromanilz
      </FooterTag>
      <FooterTag href={"https://github.com/JuanStromanIlz"}>
        <FaEnvelope />
        juanstroman@gmail.com
      </FooterTag>
    </Flex>
  </Flex>
);

export default Footer;
