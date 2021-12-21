import { Box, Flex, HStack } from "@chakra-ui/react";
import Draggable from "react-draggable";
import { useEffect, useRef, useState } from "react";

const Gallery = ({ images }) => {
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const childrenRef = useRef(null);
  const parentRef = useRef(null);

  const handleDrag = (_, ui) => {
    let children = childrenRef.current.getBoundingClientRect();
    let parent = parentRef.current.getBoundingClientRect();

    let position = {
      left: children.left - parent.left,
      right: children.right - parent.right,
    };

    // console.log(position, children.width * (images.length - 1));
    console.log(children.right, parent.right);
  };

  useEffect(() => {
    if (childrenRef !== null) {
      let width = childrenRef.current.getBoundingClientRect().width;
      setWidth(-Math.abs(width * (images.length - 1)));
    }
  }, [images]);

  return (
    <Box
      ref={parentRef}
      borderColor={"black"}
      borderWidth={1}
      overflowX={"scroll"}
    >
      <Draggable axis="x" onDrag={handleDrag}>
        <Flex ref={childrenRef}>
          {images.map((src) => (
            <img
              width={"100%"}
              src={src}
              alt=""
              draggable="false"
              style={{ cursor: "pointer" }}
            />
          ))}
        </Flex>
      </Draggable>
    </Box>
  );
};

export default Gallery;
