import { Heading, Stack, Tag, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Gallery from "./Gallery";
import ImageSlider from "./ImageSlider";
import InfoTable from "./InfoTable";
import Title from "./Title";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  header {
    .sub {
      font-size: 2.6rem;
      margin-bottom: 1.6rem;
    }
    .links {
      li {
        border-bottom: 1px solid ${(props) => props.theme.black};
        padding-bottom: 0.4rem;
        margin-bottom: 0.4rem;
        display: flex;
        flex-direction: row;
        .title {
          min-width: 30%;
          margin-right: 0.4rem;
        }
        a {
          transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          color: inherit;
          text-decoration: none;
          backdrop-filter: brightness(0.8);
        }
        .list {
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
      }
    }
    margin-bottom: 3.2rem;
  }
  .gallery {
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: 0.8rem;
    box-sizing: border-box;
    scroll-snap-type: x mandatory;
    .image {
      cursor: pointer;
      flex: 0 0 90%;
      width: 90%;
      scroll-snap-align: start;
      display: flex;
      flex-direction: column;
      img {
        display: block;
        width: 100%;
        height: 100%;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: auto;
        object-fit: scale-down;
      }
    }
  }
  .description {
    margin-top: 1.6rem;
    p {
      word-break: pre-line;
      margin-bottom: 1.6rem;
      line-height: 2.1rem;
    }
  }
  .footer {
    border-top: 1px solid ${(props) => props.theme.black};
    padding-top: 1.6rem;
    margin-top: 0.4rem;
    margin-bottom: 1.6rem;
  }
  @media (hover: hover) {
    .links a:hover {
      text-decoration: underline;
      backdrop-filter: brightness(1);
      background: ${(props) => props.theme.second};
    }
  }
  @media (min-width: 920px) {
    .gallery {
      .image {
        flex: 0 0 45%;
        width: 45%;
      }
    }
    .description {
      width: 70%;
    }
  }
`;

export default function Detail({ info }) {
  const [detailImg, setDetailImg] = useState(0);
  const [imageSlider, setImageSlider] = useState({
    open: false,
    index: 0,
  });

  const openSlider = (index) => setImageSlider({ open: true, index });

  const closeSlider = () => setImageSlider({ open: false, index: 0 });

  return (
    <DetailContainer>
      {info.images && (
        <ImageSlider
          open={imageSlider.open}
          images={info.images}
          index={imageSlider.index}
          onClose={closeSlider}
        />
      )}
      <Stack as={"header"} gap={3}>
        <Heading as={"h1"} size={"4xl"}>
          {info.title}
        </Heading>
        <Text fontSize={"2xl"}>{info.sub}</Text>
        <InfoTable
          github={info.github}
          online={info.online}
          keyWords={info.key_words}
        />
      </Stack>
      {info.images ? <Gallery images={info.images} /> : null}
      {info.description ? (
        <Stack width={{ lg: "70%" }}>
          {info.description.map((paraph) => (
            <Text>{paraph}</Text>
          ))}
        </Stack>
      ) : null}
      <div className="footer">
        <Button>
          <a href="/#trabajos">Volver</a>
        </Button>
      </div>
    </DetailContainer>
  );
}
