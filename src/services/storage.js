import { storage as firebaseStorage } from "../firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

const storageRef = (path) => ref(firebaseStorage, path);

export const upload = async (images, folder) => {
  try {
    if (images.length === 0) {
      return [];
    }
    let files = [];
    for (const image of images) {
      let imageRef = storageRef(`${folder}/${image.name}`);
      await uploadBytes(imageRef, image);
      let url = await getDownloadURL(imageRef);
      files.push({
        name: image.name,
        url,
      });
    }
    return files;
  } catch (err) {
    console.error("error storage: upload", err);
  }
};

const deleteFiles = async (images, folder) => {
  try {
    if (images.length === 0) {
      return;
    }
    for (const image of images) {
      let imageRef = storageRef(`${folder}/${image.name}`);
      await deleteObject(imageRef);
    }
    return;
  } catch (err) {
    console.error("error storage: delete", err);
  }
};

const storage = {
  upload,
  delete: deleteFiles,
};

export default storage;
