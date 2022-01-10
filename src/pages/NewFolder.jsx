import { Heading, Stack, useToast } from "@chakra-ui/react";
import FolderForm from "../components/FolderForm";
import storage from "../services/storage";
import works from "../services/works";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const NewFolder = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();
  const toast = useToast();

  async function createFolder(values) {
    const { newImages, title, ...rest } = values;
    try {
      setIsSubmit(true);
      let { id } = await works.create({ ...rest, title });
      let files = await newImages.map(({ data }) => data);
      let urls = await storage.upload(files, id);
      await works.update({
        id,
        images: [...urls],
      });
      toast({
        title: "Carpeta creada con exito.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      history.push(`/works/${title}`);
    } catch ({ message }) {
      toast({
        title: "Ocurrio un error al intentar crear la carpeta",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    return () => setIsSubmit(false);
  }, []);

  return (
    <Stack>
      <Heading as={"h1"} size={"4xl"} mb={6}>
        Nueva carpeta
      </Heading>
      <FolderForm isSubmit={isSubmit} onSubmit={createFolder} />
    </Stack>
  );
};

export default NewFolder;
