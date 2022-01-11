import {
  Flex,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Admin } from "../context/Admin";
import { useHistory, useParams } from "react-router-dom";
import works from "../services/works";
import storage from "../services/storage";

const AdminNav = () => {
  const { user } = useContext(Admin);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title } = useParams();
  const history = useHistory();
  const toast = useToast();

  const editFolder = () => history.push(`/works/edit/${title}`);

  const deleteFolder = async () => {
    try {
      let folder;
      let docs = await works.getByTitle(title);
      docs.forEach((doc) => {
        folder = { id: doc.id, ...doc.data() };
      });
      await works.delete(folder.id);
      if (folder.images) {
        await storage.delete(folder.images, folder.id);
      }
      toast({
        title: "Carpeta eliminada con exito.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      history.push("/works");
    } catch ({ message }) {
      toast({
        title: "Ocurrio un error al intentar eliminar la carpeta.",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (!user) return null;

  return (
    <>
      <Flex display={{ base: "none", md: "flex" }} direction={"row"} gap={2}>
        <Button onClick={onOpen} borderRadius={"2xl"} leftIcon={<FaTrash />}>
          Eliminar
        </Button>
        <Button onClick={editFolder} borderRadius={"2xl"} leftIcon={<FaEdit />}>
          Editar
        </Button>
      </Flex>
      <Flex display={{ md: "none" }}>
        <IconButton
          onClick={onOpen}
          icon={<FaTrash />}
          borderRadius={"2xl"}
          mr={2}
        />
        <IconButton
          onClick={editFolder}
          icon={<FaEdit />}
          borderRadius={"2xl"}
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent m={3}>
          <ModalHeader mr={6}>¿Desea eliminar {title}?</ModalHeader>
          <ModalCloseButton borderRadius={"2xl"} />
          <ModalBody>Esta acción no se puede volver atras.</ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={2} variant={"ghost"}>
              Cancelar
            </Button>
            <Button colorScheme={"red"} onClick={deleteFolder}>
              Eliminar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminNav;
