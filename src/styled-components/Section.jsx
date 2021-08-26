import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SectionContainer = styled.section`
  margin-top: 1.6rem;
  header {
    display: flex;
    overflow: hidden;
    .sectionTitle {
      transition: .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform: translateY(100%);
      font-size: 6rem;
      font-weight: 700;
      margin: 1.6rem 0;
    }
    .sectionTitle__show {
      transform: translateY(0);
    }
  }
  .slider {
    border-top: 1px solid ${props => props.theme.black};
    border-bottom: 1px solid ${props => props.theme.black};
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: .8rem;
    box-sizing: border-box;
    scroll-snap-type: x mandatory;
  }
  .list {
    border-top: 1px solid ${props => props.theme.black};
    border-bottom: 1px solid ${props => props.theme.black};
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    display: grid;
    grid-template-columns: auto;
    gap: 1.6rem;
    .card {
      width: 100%;
    }
  }
  .card {
    flex: 0 0 calc(100% - 3.2rem);
    width: calc(100% - 3.2rem);
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    .cardImg {
      width: 100%;
      max-width: 600px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        margin: auto;
        object-fit: scale-down;
      }
    }
    .cardInfo {
      margin-top: 1.6rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      .title {
        margin-bottom: .6rem;
        font-weight: 500;
      }
      .description {
        margin-bottom: 1.6rem;
      }
      .footer {
        margin-top: auto;
        display: flex;
        flex-direction: row;
        gap: .8rem;
        li {
          display: flex;
          padding: .4rem 1.6rem;
          border-radius: 25px;
          margin: auto 0;
          background: ${props => props.theme.black}; 
          border: 1px solid ${props => props.theme.black}; 
          a {
            font-size: 1.6rem;
            color: ${props => props.theme.white}; 
            text-decoration: none;
          }
        }
      }
    }
  }
  @media (min-width: 920px) {
    .list {
      grid-template-columns: repeat(3, auto);
    }
    .slider .card {
      flex-direction: row;
      .cardInfo {
        height: inherit;
        margin: auto;
      }
    }
  }
`;

export default function Section({id, title, folders, slider}) {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    delay: 400,
  });
  useEffect(() => {
    if (inView) {
      entry.target.classList.add('sectionTitle__show');
    }
  },[entry, inView]);

  return (
    <SectionContainer id={id}>
      <header>
        <h2 ref={ref} className='sectionTitle'>{title}</h2>
      </header>
      {slider === true ? 
        <div className='slider'>
          {folders.map(item => 
            <div className='card'>
              <div className='cardImg'>
                <img src='https://res.cloudinary.com/juanstromanilz/image/upload/v1626446576/Proyectos/Merramarie/merramarie5_de8ujd.png' alt='foto del proyecto' />
              </div>
              <div className='cardInfo'>
                <h2 className='title'>{item.title}</h2>
                <p className='description'>{item.description}</p>
                <ul className='footer'>
                  <li><a href='/'>Online</a></li>
                  <li><a href='/'>GitHub</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      :
        <div className='list'>
          {folders.map(item => 
              <div className='card'>
                <div className='cardImg'>
                  <img src='https://res.cloudinary.com/juanstromanilz/image/upload/v1626446576/Proyectos/Merramarie/merramarie5_de8ujd.png' alt='foto del proyecto' />
                </div>
                <div className='cardInfo'>
                  <h2 className='title'>{item.title}</h2>
                  <p className='description'>{item.description}</p>
                  <ul className='footer'>
                    <li><a href='/'>Online</a></li>
                    <li><a href='/'>GitHub</a></li>
                  </ul>
                </div>
              </div>
            )}
        </div>
      }
      
    </SectionContainer>
  );
}