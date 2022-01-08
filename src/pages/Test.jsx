import { useEffect } from "react";
import FolderForm from "../components/FolderForm";
import works from "../services/works";

const Test = () => {
  // useEffect(() => {
  //   console.log(works.get());
  // }, []);

  return <FolderForm onSubmit={(values) => console.log(values)} />;
};

export default Test;
