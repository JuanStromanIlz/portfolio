import { useState, useEffect } from "react";
import {
  Flex,
  Modal,
  Image,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  ModalFooter,
  ModalHeader,
  Text,
  IconButton,
  Breadcrumb,
  BreadcrumbItem,
  Fade,
} from "@chakra-ui/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const GalleryModal = ({ open, images, index, onClose }) => {
  const [galleryData, setGalleryData] = useState({
    items: [],
    index: 0,
  });
  const [touch, setTouch] = useState({
    startPoint: 0,
    direction: true,
  });

  function prevImage() {
    setGalleryData((prev) => {
      if (prev.index === 0) {
        return { ...prev };
      }
      return {
        items: prev.items,
        index: prev.index - 1,
      };
    });
  }

  function nextImage() {
    setGalleryData((prev) => {
      let lastCard = prev.index + 1;
      if (lastCard === prev.items.length) {
        return { ...prev };
      }
      return {
        items: prev.items,
        index: prev.index + 1,
      };
    });
  }

  /* Touch */
  function touchStart(e) {
    setTouch((prev) => {
      return {
        startPoint: e.changedTouches[0].clientX,
        direction: prev.direction,
      };
    });
  }
  function touchMove(e) {
    setTouch((prev) => {
      return {
        startPoint: prev.startPoint,
        direction: e.changedTouches[0].clientX < prev.startPoint,
      };
    });
  }
  function touchEnd() {
    if (!touch.direction) {
      return prevImage();
    }
    nextImage();
  }

  /* Keys */
  function keyPress(e) {
    if (e.keyCode === 39 || e.keyCode === 40) {
      nextImage();
    }
    if (e.keyCode === 37 || e.keyCode === 38) {
      prevImage();
    }
  }

  useEffect(() => {
    if (open) {
      setGalleryData({
        items: images,
        index: index,
      });
    }
  }, [open, images, index]);

  return (
    <Modal isOpen={open} onClose={onClose} size={"full"}>
      <ModalContent
        onKeyDown={keyPress}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        onTouchMove={touchMove}
        borderRadius={"none"}
        bg={"gray.100"}
      >
        <ModalHeader>
          <ModalCloseButton borderRadius={"full"} />
        </ModalHeader>
        <ModalBody pos={"relative"}>
          {galleryData.items.map(({ url }, index) => (
            <Fade in={index === galleryData.index} key={index}>
              <Box pos={"absolute"} left={0} top={0} right={0} bottom={0}>
                <Flex height={"100%"} p={3}>
                  <Image
                    borderRadius={"2xl"}
                    src={url}
                    margin={"auto"}
                    width={"100%"}
                    maxWidth={["100%", "70vw"]}
                    fit={"contain"}
                  />
                </Flex>
              </Box>
            </Fade>
          ))}
        </ModalBody>
        <ModalFooter>
          <Flex direction={"row"} justify={"space-between"} width={"100%"}>
            <Flex direction={"column"} justifyContent={"center"}>
              <Breadcrumb fontWeight={"bold"}>
                <BreadcrumbItem>
                  <Text>{galleryData.index + 1}</Text>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Text>{galleryData.items.length}</Text>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Flex direction={"row"}>
              <IconButton
                onClick={prevImage}
                icon={<FaChevronLeft />}
                mr={1}
                borderRadius={"full"}
              />
              <IconButton
                onClick={nextImage}
                icon={<FaChevronRight />}
                borderRadius={"full"}
              />
            </Flex>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GalleryModal;
