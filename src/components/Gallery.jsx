import styled from "styled-components";
import { Box, Flex } from "@chakra-ui/react";
import Draggable from "react-draggable";
import { useEffect, useRef, useState } from "react";

const GalleryContainer = styled(Box)`
  scroll-behavior: smooth;
  cursor: ${(props) => props.grab};
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  .left-shadow {
    z-index: 1;
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 75px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 50%
    );
  }
  .right-shadow {
    z-index: 1;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    width: 75px;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 50%
    );
  }
`;

const Image = styled(Box)`
  overflow: hidden;
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
  const ref = useRef(null);
  const nodeRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [scrollingWidth, setScrollingWidth] = useState(0);

  const onDrag = () => setIsDragging(true);
  const onStop = () =>
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  const clickEvent = (index) => {
    if (isDragging) return;
    toggleAction(index);
  };

  useEffect(() => {
    if (ref !== null) {
      let width = ref.current.scrollWidth - ref.current.clientWidth - 1;
      setScrollingWidth(-Math.abs(width));
    }
  }, [images]);

  return (
    <GalleryContainer
      ref={ref}
      overflowX={"auto"}
      cursor={isDragging ? "grabbing" : "grab"}
    >
      <div className="left-shadow" />
      <div className="right-shadow" />
      <Draggable
        axis="x"
        bounds={{ left: scrollingWidth, right: 0 }}
        onDrag={onDrag}
        onStop={onStop}
        nodeRef={nodeRef}
      >
        <Flex gap={6} ref={nodeRef}>
          {images.map((src, index) => (
            <Image
              key={index}
              onClick={() => clickEvent(index)}
              borderRadius={"2xl"}
            >
              <img width={"100%"} src={src} alt="" draggable="false" />
            </Image>
          ))}
        </Flex>
      </Draggable>
    </GalleryContainer>
  );
};

export default Gallery;
