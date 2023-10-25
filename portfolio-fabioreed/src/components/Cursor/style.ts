import styled from "styled-components";

export const CursorContainer = styled.span`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: none;
  
  @media (min-width: 992px) {
    display: flex;
  }

  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s;
  pointer-events: none;

  &.hover {
    & .dot {
      width: 18px;
      height: 18px;
      border: 2px solid transparent;
      border-color: title;
      background-color: cursor;
    }

    & .solidOutline {
      transform: scale(0%);
    }

    & .dashedOutline {
      width: 28px;
      height: 28px;
      border: 1px dashed;
      border-color: title;
      animation-direction: reverse;
    }
  }
`

export const CursorPart = styled.span`
  position: absolute;
  display: block;
  border-radius: 50%;

  &.dot {
    background-color: subtitle;
    width: 8px;
    height: 8px;
    border: 2px solid transparent;
    transition: width 0.5s, height 0.5s, border-color 0.5s, background-color 0.5s;
  }

  &.solidOutline {
    border: 1px solid;
    border-color: subtitle;
    width: 85px;
    height: 85px;
    transition: transform 0.75s;
  }

  &.dashedOutline {
    width: 105px;
    height: 105px;
    border: 1px dashed;
    border-color: subtitle;
    transition: width 0.75s, height 0.75s;
    animation: spin 15s infinite linear;
  }
`
