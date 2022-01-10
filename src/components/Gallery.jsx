import styled from "styled-components";
import { Box, Flex } from "@chakra-ui/react";

const GalleryContainer = styled(Flex)`
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    scrollbar-width: thin;
    width: 20x;
    background: transparent;
    opacity: 0.3;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a0aec0;
    border-radius: 1rem;
    border: 6px solid white;
  }
  &::-webkit-scrollbar-thumb:hover {
    border-width: 4px;
  }
`;

const Image = styled(Box)`
  overflow: hidden;
  cursor: pointer;
  flex: 0 0 90%;
  width: 90%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  img {
    display: block;
    width: 100%;
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    object-fit: scale-down;
  }
  @media (min-width: 920px) {
    flex: 0 0 45%;
    width: 45%;
  }
`;

const Gallery = ({ images, toggleAction }) => {
  return (
    <GalleryContainer overflowX={"auto"} gap={6}>
      {images.map(({ url }, index) => (
        <Image
          key={index}
          onClick={() => toggleAction(index)}
          borderRadius={"2xl"}
        >
          <img width={"100%"} src={url} alt="" draggable="false" />
        </Image>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
