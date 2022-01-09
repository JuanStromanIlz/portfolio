import { Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Card from "../components/Card";
import Layout from "../components/Layout";
import works from "../services/works";

const Works = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    async function getWorksFromServer() {
      try {
        let docs = [];
        let res = await works.get();
        res.forEach((doc) => {
          docs.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setData(docs);
      } catch (err) {}
    }
    getWorksFromServer();
  }, []);

  return (
    <Layout>
      <Stack>
        <Heading as={"h1"} size={"4xl"} mb={6}>
          Trabajos
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {data && data.map((item) => <Card key={item.title} info={item} />)}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
};

export default Works;
