import {
  Stack,
  Heading,
  SimpleGrid,
  Skeleton,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Card from "../components/Card";
import works from "../services/works";

const Works = () => {
  const [data, setData] = useState(undefined);
  const toast = useToast();

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
      } catch ({ message }) {
        toast({
          title: "Ocurrio un error al intentar traer las carpetas.",
          description: message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
    getWorksFromServer();
  }, [toast]);

  if (!data) {
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Skeleton height={"xs"} />
        <Skeleton height={"xs"} />
        <Skeleton height={"xs"} />
        <Skeleton height={"xs"} />
      </SimpleGrid>
    );
  }

  return (
    <Stack gap={6}>
      <Heading as={"h1"} size={"4xl"} mb={6}>
        Trabajos
      </Heading>
      {data.length === 0 ? (
        <Text>¡Wow! Pareciera que no hay trabajos.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {data.map((item) => (
            <Card key={item.title} info={item} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default Works;
