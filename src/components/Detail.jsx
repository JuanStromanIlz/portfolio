import { Heading, Stack, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import Gallery from "./Gallery";
import ImageSlider from "./ImageSlider";
import InfoTable from "./InfoTable";

export default function Detail({ info }) {
  const [imageSlider, setImageSlider] = useState({
    open: false,
    index: 0,
  });

  const openSlider = (index) => setImageSlider({ open: true, index });

  const closeSlider = () => setImageSlider({ open: false, index: 0 });

  return (
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
      {info.images ? (
        <Box my={3}>
          <Gallery images={info.images} toggleAction={openSlider} />
        </Box>
      ) : null}
      {info.description ? (
        <Stack width={{ lg: "70%" }}>
          {info.description.map((paraph) => (
            <Text>{paraph}</Text>
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
}
