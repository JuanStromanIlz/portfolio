import { createContext, useEffect } from "react";
import { useState } from "react";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut as signOutFirebase,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useToast } from "@chakra-ui/react";

const Admin = createContext();
const { Provider } = Admin;

const AdminContext = ({ children }) => {
  const [user, setUser] = useState({});
  const toast = useToast();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      setUser(null);
      localStorage.removeItem("user");
    }
  });

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch ({ message }) {
      toast({
        title: "Ocurrio un error al intentar loggearse",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const signOut = async () => {
    try {
      await signOutFirebase(auth);
    } catch ({ message }) {
      toast({
        title: "Ocurrio un error al intentar cerrar sesion",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    let localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  return (
    <Provider
      value={{
        user: user,
        signIn,
        signOut,
      }}
    >
      {children}
    </Provider>
  );
};

export { AdminContext as default, Admin };
