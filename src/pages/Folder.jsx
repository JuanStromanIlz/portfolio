import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heading, Stack, Box, Text } from "@chakra-ui/react";
import Gallery from "../components/Gallery";
import ImageSlider from "../components/ImageSlider";
import InfoTable from "../components/InfoTable";
import trabajos from "../trabajos.json";
import Layout from "../components/Layout";

export default function Folder() {
  const [info, setInfo] = useState({});
  const { title } = useParams();

  const [imageSlider, setImageSlider] = useState({
    open: false,
    index: 0,
  });

  const openSlider = (index) => setImageSlider({ open: true, index });

  const closeSlider = () => setImageSlider({ open: false, index: 0 });

  useEffect(() => {
    let folder = trabajos.find((item) => item.title === title);
    setInfo(folder);
  }, [title]);

  return (
    <Layout>
      <Stack>
        {info.images && (
          <ImageSlider
            open={imageSlider.open}
            images={info.images}
            index={imageSlider.index}
            onClose={closeSlider}
          />
        )}
        <Stack as={"header"} gap={3} mb={6}>
          <Heading as={"h1"} size={"4xl"}>
            {info.title}
          </Heading>
          <Text fontSize={"2xl"}>{info.sub}</Text>
          <InfoTable
            github={info.github}
            online={info.online}
            keyWords={info.key_words}
          />
        </Stack>
        {info.images && (
          <Box my={3}>
            <Gallery images={info.images} toggleAction={openSlider} />
          </Box>
        )}
        {info.description && (
          <Stack width={{ lg: "70%" }}>
            {info.description.map((paraph, index) => (
              <Text key={index}>{paraph}</Text>
            ))}
          </Stack>
        )}
      </Stack>
    </Layout>
  );
}
