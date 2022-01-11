import { Stack, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Stack gap={6}>
      <Stack gap={3}>
        <Heading as={"h1"} size={"4xl"}>
          Sobre mi
        </Heading>
        <Text fontSize={"2xl"}>¡Hola, mundo!</Text>
      </Stack>
      <Text width={{ lg: "70%" }}>
        Mi nombre es Juan y soy un <strong>frontend dev</strong>. Apasionado y
        creativo, me gustan las peliculas, los diseños abiertos y pasar tiempo
        al aire libre.
        <br />
        Estos son algunos de los trabajos que realice, mayormente usando{" "}
        <strong>React.js</strong> y <strong>styled-components</strong>. Cuento
        ademas con conocimiento en Node.js, Express.js y manejo de packages
        varios con Npm.
        <br />
        <br />
        Si te gusta mi trabajo o estas pensado en sumar gente a tu equipo{" "}
        <strong>no dudes en contactarme</strong>.
      </Text>
    </Stack>
  );
};

export default About;
