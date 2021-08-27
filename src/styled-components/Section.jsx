import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SectionContainer = styled.section`
  margin-top: 1.6rem;
  header {
    border-bottom: 1px solid ${props => props.theme.main};
    .sectionTitle {
      font-size: 6rem;
      font-weight: 700;
      text-align: center;
      margin: 1.6rem 0;
      color: ${props => props.theme.main};
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    .card {
      margin-top: 1.6rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      transition: .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      .title {
        font-size: 3rem;
        font-weight: 500;
      }
      .sub {
        font-size: 2rem;
        margin-bottom: .8rem;
      }
      .footer {
        margin-top: 1.6rem;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: row;
        gap: .8rem;
        li {
          transition: .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: ${props => props.theme.black};
          color: ${props => props.theme.white};
          border-radius: 25px;
          padding: .4rem 1.6rem;
          font-size: 1.8rem;
          border: 1px solid ${props => props.theme.black};
          a {
            color: ${props => props.theme.white};
            text-decoration: none;
          }
        }
      }
      .keyWords {
        display: flex;
        flex-direction: row;
        gap: 1.6rem;
        li {
          opacity: .8;
        }
      }
      .cardImgs {
        margin-bottom: 1.6rem;
        width: 100%;
        max-height: 350px;
        overflow-x: scroll;
        display: flex;
        gap: .8rem;
        box-sizing: border-box;
        scroll-snap-type: x mandatory;
        .image {
          flex: 0 0 90%;
          width: 90%;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          img {
            display: block;
            width: 100%;
            height: 100%;
            margin: auto;
            object-fit: scale-down;
          }
        }
      }
      .description {
        margin-left: auto;
        margin-right: auto;
        p {
          margin-bottom: .8rem;
        }
      }
    }
    .card__show {
      opacity: 1;
    }
  }
  @media (hover:hover) {
    .footer li:hover {
      background: ${props => props.theme.main} !important;
      border: 1px solid ${props => props.theme.main} !important;
    }
  }
  @media (min-width: 920px) {
    .content .card {
      .description {
        width: 70%;
      }
      .cardImgs .image {
        flex: 0 0 60%;
        width: 60%;
      }
    }
  }
`;

export default function Section({id, title, folders}) {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    delay: 400,
  });
  useEffect(() => {
    if (inView) {
      entry.target.classList.add('card__show');
    }
  },[entry, inView]);

  return (
    <SectionContainer id={id}>
      <header>
        <h2 className='sectionTitle'>{title}</h2>
      </header>
      <div className='content'>
        {folders.map(item => 
          <div ref={ref} className='card'>
            <h2 className='title'>{item.title}</h2>
            <h3 className='sub'>{item.sub}</h3>
            {item.key_words ? 
              <ul className='keyWords'>
                {item.key_words.map(word =>
                  <li>{word}</li>
                )}
              </ul>
            : null}
            <ul className='footer'>
              {item.online ? <li><a href={item.online}>Online</a></li> : null}
              {item.github ? <li><a href={item.github}>GitHub</a></li> : null}
            </ul>
            {item.images ? 
              <div className='cardImgs'>
                {item.images.map(img => 
                  <div className='image'>
                    <img src={img} />
                  </div>
                )}
              </div>
            : null}
            <div className='description'>
              {item.description.map(p => 
                <p>{p}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}