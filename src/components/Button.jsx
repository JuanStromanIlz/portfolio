import { forwardRef, useRef } from 'react';
import styled from 'styled-components';

const CustomButton = forwardRef((props, ref) => (
  <div className={props.className}>
    <button ref={ref} onClick={() => props.clicked()}>{props.children}</button>
  </div>
));

const StyledButton = styled(CustomButton)`
  background: transparent;
  border: 0;
  border-radius: 0;
  color: inherit;
  display: inline-block;
  font: inherit;
  height: fit-content;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  button {
    align-items: center;
    background: transparent;
    border: 2px solid ${props => props.color};
    border-radius: 99em;
    color: ${props => props.color};
    display: flex;
    font-weight: 600;
    font-size: 1em;
    height: 2.5em;
    min-width: 2.5em;
    padding: 0 1em;
    position: relative;
    width: 100%;
    :hover {
      filter: brightness(2.1);
      box-shadow: 0 0 0 1px ${props => props.color};
    }
    :focus {
      outline: none;
    }
  }
  .click {
    animation: pulse 1.1s 1;
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 ${props => props.color};
      }
      
      70% {
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0);
      }
      
      100% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      }
    }
  }
`;

export default function Button(props) {
  const anima = useRef(null);

  function animateClick() {
    anima.current.classList.add("click")
    const timeout = setTimeout(() => {
      anima.current.classList.remove("click")
    }, 1500);
    props.useFunction && props.useFunction();
    return () => clearTimeout(timeout);
  }

  return (
    <StyledButton
      ref={anima}
      clicked={animateClick}
      className={StyledButton}
      color={props.color}
    >
      {props.children}
    </StyledButton>
  );
}