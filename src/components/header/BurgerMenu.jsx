import React from 'react';
import { styled } from 'styled-components';

const BurgerMenu = ({ isNavHeaderOpen, setIsNavHeaderOpen }) => {
  return (
    <Wrapper
      className="h-12 w-12 p-2 bg-transparent flex sm:hidden justify-center"
      aria-label={`${
        isNavHeaderOpen
          ? 'close the navigation menu'
          : 'open the navigation menu'
      } `}
      alt="burger menu"
      onClick={() => setIsNavHeaderOpen(!isNavHeaderOpen)}
    >
      <svg id="hamburger" className="Header__toggle-svg">
        <g
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`stroke-accent w-8 h-8 ${isNavHeaderOpen && 'open'}`}
        >
          <path id="top-line" d="M5,10 L30,10 Z"></path>
          <path id="middle-line" d="M5,20 L30,20 Z"></path>
          <path id="bottom-line" d="M5,30 L30,30 Z"></path>
        </g>
      </svg>
    </Wrapper>
  );
};
export default BurgerMenu;

const Wrapper = styled.button`
  // svg burger animation from Cassie Evans
  // https://codepen.io/cassie-codes/pen/abmvqKO
  #top-line,
  #bottom-line,
  #middle-line {
    transform-box: fill-box;
    transform-origin: center;
  }

  .open {
    #top-line {
      animation: down-rotate 0.6s ease-out both;
    }
    #bottom-line {
      animation: up-rotate 0.6s ease-out both;
    }
    #middle-line {
      animation: hide 0.6s ease-out forwards;
    }
  }

  @keyframes up-rotate {
    0% {
      animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
      transform: translateY(0px);
    }
    30% {
      transform-origin: center;
      animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
      transform: translateY(-10px);
    }
    100% {
      transform-origin: center;
      transform: translateY(-10px) rotate(45deg) scale(0.9);
    }
  }

  @keyframes down-rotate {
    0% {
      animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
      transform: translateY(0px);
    }
    30% {
      transform-origin: center;
      animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
      transform: translateY(10px);
    }
    100% {
      transform-origin: center;
      transform: translateY(10px) rotate(-45deg) scale(0.9);
    }
  }

  @keyframes hide {
    29% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
