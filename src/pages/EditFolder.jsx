import { useEffect, useState } from "react";
import works from "../services/works";
import { useParams, useHistory } from "react-router-dom";
import {
  Heading,
  Stack,
  Skeleton,
  SkeletonText,
  useToast,
} from "@chakra-ui/react";
import FolderForm from "../components/FolderForm";
import storage from "../services/storage";

const EditFolder = () => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const { title } = useParams();
  const history = useHistory();
  const toast = useToast();

  const imagesToDelete = (prevFolder, newFolder) => {
    let result = [];
    for (const image of prevFolder) {
      if (!newFolder.find(({ name }) => name === image.name)) {
        result.push(image);
      }
    }
    return result;
  };

  async function handleEdit(values) {
    const { id, newImages, images, title: newTitle, ...rest } = values;
    try {
      setIsSubmit(true);
      let urls = [];
      if (newImages.length > 0) {
        let files = await newImages.map(({ data }) => data);
        let uploadFiles = await storage.upload(files, id);
        urls.push(...uploadFiles);
      }
      let deleteImages = imagesToDelete(info.images, images);
      await storage.delete(deleteImages, id);
      await works.update({
        ...rest,
        id,
        title: newTitle,
        images: [...images, ...urls],
      });
      toast({
        title: "Carpeta editada",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      history.push(`/works/${newTitle}`);
    } catch ({ message }) {
      toast({
        title: "Ocurrio un error al intentar editar la carpeta",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    async function getFolderFromServer(title) {
      try {
        let docs = await works.getByTitle(title);
        docs.forEach((doc) => {
          setInfo({ id: doc.id, ...doc.data() });
        });
        setIsLoading(false);
      } catch ({ message }) {
        toast({
          title: "Ocurrio un error al buscar la carpeta",
          description: message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
    getFolderFromServer(title);

    return () => {
      setIsSubmit(false);
    };
  }, [title, toast]);

  if (isLoading) {
    return (
      <Stack gap={6}>
        <Skeleton height={"24"} />
        <SkeletonText noOfLines={6} spacing={3} />
      </Stack>
    );
  }

  return (
    <Stack gap={6}>
      <Heading as={"h1"} size={"4xl"} mb={6}>
        Editar carpeta
      </Heading>
      <FolderForm isSubmit={isSubmit} folder={info} onSubmit={handleEdit} />
    </Stack>
  );
};

export default EditFolder;
