import { Heading, Stack } from "@chakra-ui/react";
import axios from "axios";
import FolderForm from "../components/FolderForm";
import Layout from "../components/Layout";
import works from "../services/works";

const NewFolder = () => {
  async function createFolder(values) {
    const { newImages, images, ...rest } = values;
    const { REACT_APP_CLOUDINARY_CLOUD_NAME } = process.env;
    try {
      let urls = [];
      for (const { data } of newImages) {
        let formData = new FormData();
        formData.append("file", data);
        formData.append("upload_preset", "hoi3ozqo");
        let res = await axios.post(
          `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`,
          formData
        );
        urls.push(res.data.secure_url);
      }
      await works.create({
        ...rest,
        images: [...images, ...urls],
      });
    } catch (err) {}
  }

  return (
    <Layout>
      <Stack>
        <Heading as={"h1"} size={"4xl"} mb={6}>
          Nueva carpeta
        </Heading>
        <FolderForm onSubmit={createFolder} />
      </Stack>
    </Layout>
  );
};

export default NewFolder;
