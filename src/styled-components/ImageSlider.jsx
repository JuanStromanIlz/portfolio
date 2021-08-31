import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Slider = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  z-index: 11;
  margin: 0;
  background: ${props => props.theme.white};
  justify-content: space-around;
  align-items: center;
  outline: none;
  .imgContainer {
    position: relative;
    width: 100%;
    height: 100%;
    .slider {
      pointer-events: none;
      opacity: 0;
      position: absolute;
      inset: 0;
      display: flex;
      margin: auto;
      transition: .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      .sliderImg {
        object-fit: scale-down;
        width: 100%;
        height: 100%;
        padding: 1.6rem .8rem;
        display: flex;
        margin: auto;
      }
    }
    .slider__show {
      opacity: 1;
      pointer-events: auto;
    }
  }
  .close {
    z-index: 2;
    position: absolute;
    top: 1.6rem;
    right: .8rem;
  }
  .list {
    position: absolute;
    bottom: 1.6rem;
    left: 0;
    right: 0;
    padding-left: .8rem;
    padding-right: .8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .buttons {
      display: none;
      flex-direction: row;
      gap: .8rem;
    }
  }
  @media(min-width: 920px) {
    .close {
      right: 3.2rem;
    }
    .imgContainer .slider .sliderImg {
      padding: 1.6rem 3.2rem;
      width: 70%;
      height: 70%;
    }
    .list {
      padding-left: 3.2rem;
      padding-right: 3.2rem;
      justify-content: space-between;
      .buttons {
        display: flex;
      }
    }
  }
`;


const ImageSlider = ({images, detailImg, setDetailImg}) => {
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
    let lastCard = detailImg + 1;
    setTimeout(()=> {
      if (moveDirection) {
        if (lastCard < images.length) {
          setDetailImg(detailImg +1);
        }
        if (lastCard === images.length) {
          setDetailImg(0);
        }
      } else if(!moveDirection && detailImg > 0) {
        setDetailImg(detailImg -1);
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
    if (detailImg > 0) {
      setDetailImg(detailImg -1);
    }
  }

  function buttonRight() {
    let lastCard = detailImg + 1;
    if (lastCard < images.length) {
      setDetailImg(detailImg +1);
    }
    if (lastCard === images.length) {
      setDetailImg(0);
    }
  }

  const closeSlider = () => {
    document.getElementById('imageSlider').style.display='none';
    document.body.removeAttribute('style');
  }

  return (
    <Slider 
      id='imageSlider'
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onTouchMove={touchMove}
      onKeyDown={keyPress}
      tabIndex={0}
    >
      <Button className='close' onClick={closeSlider}>close</Button>
      <div className='imgContainer'>
        {images.map((img, i) => 
          <div key={i} className={`slider  ${detailImg === i ? 'slider__show' : null}`}>
            <img className='sliderImg' src={img} alt='detail' />
          </div>
        )}
      </div>
      <div className='list'>
        <span>{`${detailImg + 1} / ${images.length}`}</span>
        <div className='buttons'>
          <Button onClick={buttonLeft}>prev</Button>
          <Button onClick={buttonRight}>next</Button>
        </div>
      </div>
    </Slider>
  );
}

export default ImageSlider;