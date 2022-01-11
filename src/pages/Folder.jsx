import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Heading,
  Stack,
  Box,
  Text,
  Skeleton,
  SkeletonText,
  useToast,
} from "@chakra-ui/react";
import Gallery from "../components/Gallery";
import ImageSlider from "../components/ImageSlider";
import InfoTable from "../components/InfoTable";
import works from "../services/works";
import styled from "styled-components";
import AdminNav from "../components/AdminNav";

const TextContainer = styled(Text)`
  a {
    text-decoration: underline;
  }
`;

export default function Folder() {
  const [info, setInfo] = useState(undefined);
  const { title } = useParams();
  const toast = useToast();

  const [imageSlider, setImageSlider] = useState({
    open: false,
    index: 0,
  });

  const openSlider = (index) => setImageSlider({ open: true, index });

  const closeSlider = () => setImageSlider({ open: false, index: 0 });

  useEffect(() => {
    async function getFolderFromServer(title) {
      try {
        let docs = await works.getByTitle(title);
        docs.forEach((doc) => {
          setInfo({ id: doc.id, ...doc.data() });
        });
      } catch ({ message }) {
        toast({
          title: "Ocurrio un error al buscar la carpeta",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
    getFolderFromServer(title);
  }, [title, toast]);

  if (!info) {
    return (
      <Stack gap={6}>
        <Skeleton height={"24"} />
        <Skeleton height={"xs"} />
        <SkeletonText noOfLines={4} spacing={3} />
      </Stack>
    );
  }

  return (
    <Stack gap={6}>
      {info.images && (
        <ImageSlider
          open={imageSlider.open}
          images={info.images}
          index={imageSlider.index}
          onClose={closeSlider}
        />
      )}
      <AdminNav />
      <Stack as={"header"} gap={3}>
        <Heading as={"h1"} size={"4xl"}>
          {info.title}
        </Heading>
        <Text fontSize={"2xl"}>{info.sub}</Text>
        <InfoTable
          github={info.github}
          online={info.online}
          keyWords={info.keyWords}
        />
      </Stack>
      {info.images && (
        <Box>
          <Gallery images={info.images} toggleAction={openSlider} />
        </Box>
      )}
      {info.description && (
        <Stack fontSize={"lg"} width={{ lg: "70%" }}>
          <TextContainer
            dangerouslySetInnerHTML={{ __html: info.description }}
          />
        </Stack>
      )}
    </Stack>
  );
}
