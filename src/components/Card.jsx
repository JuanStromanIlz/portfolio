import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

const CardContainer = styled(Flex)`
  .image {
    overflow: hidden;
    img {
      transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
      object-fit: cover;
    }
  }
  :hover img {
    transform: scale(1.1);
  }
`;

export default function Card({ info }) {
  return (
    <CardContainer direction={"column"} as={Link} to={`/works/${info.title}`}>
      <Flex direction={"column"} mb={3}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          {info.title}
        </Text>
        <Text fontSize={"xl"}>{info.sub}</Text>
      </Flex>
      <Box className="image" borderRadius={"2xl"}>
        <img
          src={info.images[0]}
          alt={info.title}
          width={"100%"}
          height={"100%"}
        />
      </Box>
    </CardContainer>
  );
}
