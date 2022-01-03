import { Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import trabajos from "../trabajos.json";

const Works = () => {
  return (
    <Layout>
      <Stack>
        <Heading as={"h1"} size={"4xl"} mb={6}>
          Trabajos
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {trabajos.map((item) => (
            <Card key={item.title} info={item} />
          ))}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
};

export default Works;
