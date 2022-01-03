import { Tag, Table, Tbody, Tr, Td, Wrap, Box } from "@chakra-ui/react";

const CustomTag = ({ href, children }) => {
  if (!href) {
    return (
      <Tag size={"lg"} borderRadius={"2xl"}>
        {children}
      </Tag>
    );
  }
  return (
    <Tag
      size={"lg"}
      borderRadius={"2xl"}
      as="a"
      href={href}
      bg={"brand.100"}
      _hover={{
        textDecoration: "underline",
      }}
    >
      {children}
    </Tag>
  );
};

const InfoTable = ({ online, github, keyWords }) => (
  <Box
    borderColor={"gray.300"}
    bg={"gray.50"}
    borderWidth={1}
    borderRadius={"2xl"}
    overflow={"hidden"}
  >
    <Table>
      <Tbody>
        {online && (
          <Tr>
            <Td color={"gray.800"} fontWeight={"bold"}>
              Online:
            </Td>
            <Td>
              <CustomTag href={online[0]}>{online[1]}</CustomTag>
            </Td>
          </Tr>
        )}
        {github && (
          <Tr>
            <Td color={"gray.800"} fontWeight={"bold"}>
              Github:
            </Td>
            <Td>
              <CustomTag href={github[0]}>{github[1]}</CustomTag>
            </Td>
          </Tr>
        )}
        {keyWords && (
          <Tr>
            <Td color={"gray.800"} fontWeight={"bold"}>
              Palabras clave:
            </Td>
            <Td>
              <Wrap gap={2}>
                {keyWords.map((word, index) => (
                  <CustomTag key={index}>{word}</CustomTag>
                ))}
              </Wrap>
            </Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  </Box>
);

export default InfoTable;
