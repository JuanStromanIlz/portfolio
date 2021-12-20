import { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  .slide {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    border: none;
    width: 100px;
    background: transparent;
  }
  .slide__left {
    left: 0;
  }
  .slide__right {
    right: 0;
  }
  .cardContainer {
    height: 100%;
    position: relative;
    overflow: hidden;
    .card {
      pointer-events: none;
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      display: flex;
      flex-direction: column;
      .cardImg {
        display: flex;
        img {
          margin: auto;
          width: 90%;
          height: 90%;
          object-fit: scale-down;
        }
      }
      .cardInfo {
        margin: auto 0;
        padding: 1.6rem;
        .title {
          font-weight: 700;
          margin-bottom: .8rem;
        }
        .description {
          font-style: italic;
        }
      }
    }
    .card__show {
      opacity: 1;
      pointer-events: inherit;
    }
  }
  @media (min-width: 920px) {
    .slide {
      display: flex;
    }
    .cardContainer .card {
      flex-direction: row;
      .cardImg {
        width: 60%;
        height: 90%;
      }
    }
  }
`;


const Slider = ({folders}) => {
  const [indexCard, setIndexCard] = useState(0);
  const [touchStartPoint, setTouchStartPoint] = useState(0);
  const [moveDirection, setMoveDirection] = useState(true);

  /* Touch */
  function touchStart(e) {
    setTouchStartPoint(e.changedTouches[0].clientX);
  }
  function touchMove(e) {
    setMoveDirection(e.changedTouches[0].clientX < touchStartPoint);
  }
  function touchEnd() {
    let lastCard = indexCard + 1;
    setTimeout(()=> {
      if (moveDirection) {
        if (lastCard < folders.length) {
          setIndexCard(indexCard +1);
        }
        if (lastCard === folders.length) {
          setIndexCard(0);
        }
      } else if(!moveDirection && indexCard > 0) {
        setIndexCard(indexCard -1);
      }
    }, 250);
  }

  /* Keys */
  function keyPress(e) {
    if (e.keyCode === 39 || e.keyCode === 40) {
      buttonRight();
    }
    if (e.keyCode === 37 || e.keyCode === 38) {
      buttonLeft();
    }
  }

  /* Buttons */
  function buttonLeft() {
    if (indexCard > 0) {
      setIndexCard(indexCard -1);
    }
  }

  function buttonRight() {
    let lastCard = indexCard + 1;
    if (lastCard < folders.length) {
      setIndexCard(indexCard +1);
    }
    if (lastCard === folders.length) {
      setIndexCard(0);
    }
  }

  return (
    <SliderContainer
      id='imageSlider'
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onTouchMove={touchMove}
      onKeyDown={keyPress}
      tabIndex={0}
    >
      <button className='slide slide__left' onClick={buttonLeft}>
        <span className='material-icons'>chevron_left</span>
      </button>
      <div className='cardContainer'>
        {folders.map((card, i) => 
          <div key={i} className={`card  ${indexCard === i ? 'card__show' : null}`}>
            <div className='cardImg'>
              <img src={card.images[0].url} alt='folder' />
            </div>
            <div className='cardInfo'>
              <h2 className='title'>{card.title}</h2>
              <p className='description'>{card.description}</p>
            </div>
          </div>
        )}
      </div>
      <button className='slide slide__right' onClick={buttonRight}>
        <span className='material-icons'>chevron_right</span>
      </button>
      <div className='list'>
        {folders.map((item, i) => 
          <div key={i} className={`listItem ${indexCard === i ? 'listItem__active' : null}`}></div>
        )}
      </div>
    </SliderContainer>
  );
}

export default Slider;