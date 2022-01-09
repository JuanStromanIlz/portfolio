import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Heading,
  Stack,
  Box,
  Text,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import Gallery from "../components/Gallery";
import ImageSlider from "../components/ImageSlider";
import InfoTable from "../components/InfoTable";
import Layout from "../components/Layout";
import works from "../services/works";

export default function Folder() {
  const [info, setInfo] = useState(undefined);
  const { title } = useParams();

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
      } catch (err) {
        console.error(err);
      }
    }
    getFolderFromServer(title);
  }, [title]);

  if (!info) {
    return (
      <Layout>
        <Stack gap={6}>
          <Skeleton height={"24"} />
          <Skeleton height={"xs"} />
          <SkeletonText noOfLines={4} spacing={3} />
        </Stack>
      </Layout>
    );
  }

  return (
    <Layout>
      <Stack gap={6}>
        {info.images && (
          <ImageSlider
            open={imageSlider.open}
            images={info.images}
            index={imageSlider.index}
            onClose={closeSlider}
          />
        )}
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
            <Text dangerouslySetInnerHTML={{ __html: info.description }} />
          </Stack>
        )}
      </Stack>
    </Layout>
  );
}
