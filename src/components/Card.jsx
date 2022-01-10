import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";

const CardComponent = styled(Flex)`
  .image {
    position: relative;
    aspect-ratio: 16 / 7;
    overflow: hidden;
    img {
      transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: absolute;
      inset: 0;
    }
    img:nth-child(2) {
      visibility: hidden;
    }
    :hover {
      img:nth-child(2) {
        visibility: visible;
      }
    }
  }
`;

export default function Card({ info }) {
  return (
    <CardComponent direction={"column"} as={Link} to={`/works/${info.title}`}>
      <Box className="image" borderRadius={"2xl"} cursor={"default"}>
        <img
          src={info.images[0].url}
          alt={info.title}
          width={"100%"}
          height={"100%"}
        />
        <img
          src={info.images[1].url}
          alt={info.title}
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Flex direction={"column"} mt={3} cursor={"pointer"}>
        <Text
          fontSize={"2xl"}
          fontWeight={"bold"}
          _hover={{
            textDecoration: "underline",
          }}
        >
          {info.title}
        </Text>
        <Text fontSize={"xl"}>{info.sub}</Text>
      </Flex>
    </CardComponent>
  );
}
