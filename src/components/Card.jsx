import styled from "styled-components";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: inherit;
    text-decoration: none;
    display: contents;
  }
  .cardHeader {
    overflow: hidden;
    span {
      transition: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      font-size: 3rem;
      font-family: HaasMd;
      padding-bottom: 0.4rem;
      opacity: 0;
    }
    .line {
      transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      border-bottom: 1px solid ${(props) => props.theme.black};
      transform: translateX(-100%);
    }
  }
  .cardWrapper {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    .info {
      opacity: 0;
      margin-top: 0.8rem;
      transition: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      .title {
        font-family: HaasMd;
      }
    }
    .imgContainer {
      opacity: 0;
      transition: 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
      aspect-ratio: 16 / 9;
      img {
        transition: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        position: absolute;
        inset: 0;
        width: 100%;
        display: block;
        margin: auto;
        object-fit: scale-down;
      }
    }
  }
  .card__show {
    .cardHeader {
      span {
        opacity: 1;
      }
      .line {
        transform: translateX(0);
      }
    }
    .cardWrapper {
      .info,
      .imgContainer {
        opacity: 1;
      }
    }
  }
  @media (hover: hover) {
    :hover {
      .cardWrapper {
        .imgContainer {
          img:last-child {
            opacity: 0;
          }
        }
      }
    }
  }
`;

export default function Card({ info, index }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <CardContainer ref={ref}>
      <div className={inView && "card__show"}>
        <div className="cardHeader">
          <Link to={info.title}>
            <span>{index + 1}</span>
          </Link>
          <div className="line"></div>
        </div>
        <div className="cardWrapper">
          {info.images ? (
            <div className="imgContainer">
              <img src={info.images[1]} alt="imagen del proyecto" />
              <img src={info.images[0]} alt="imagen del proyecto" />
            </div>
          ) : null}
          <div className="info">
            <Link to={`/works/${info.title}`}>
              <h2 className="title">{info.title}</h2>
            </Link>
            <Link to={info.title}>
              <h3 className="sub">{info.sub}</h3>
            </Link>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
