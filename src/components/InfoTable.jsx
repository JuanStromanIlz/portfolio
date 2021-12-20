import { Tag, Table, Tbody, Tr, Td, HStack } from "@chakra-ui/react";

const InfoTable = ({ online, github, keyWords }) => (
  <Table>
    <Tbody>
      {online && (
        <Tr>
          <Td>Online:</Td>
          <Td>
            <Tag size={"lg"} borderRadius={"none"} as="a" href={online[0]}>
              {online[1]}
            </Tag>
          </Td>
        </Tr>
      )}
      {github && (
        <Tr>
          <Td>Github:</Td>
          <Td>
            <Tag size={"lg"} borderRadius={"none"} as="a" href={github[0]}>
              {github[1]}
            </Tag>
          </Td>
        </Tr>
      )}
      {keyWords && (
        <Tr>
          <Td>Palabras clave:</Td>
          <Td>
            <HStack gap={2}>
              {keyWords.map((word) => (
                <Tag size={"lg"} borderRadius={"none"}>
                  {word}
                </Tag>
              ))}
            </HStack>
          </Td>
        </Tr>
      )}
    </Tbody>
  </Table>
);

export default InfoTable;
