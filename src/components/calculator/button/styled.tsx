import styled from "@emotion/styled";

export interface Props {
  background: string;
}

export const _Button = styled.button<Props>`
  background: inherit;
  border: none;
  box-shadow: none;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  width: 100%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  text-align: center;

  &.zero {
    grid-column: 1 / span 2;
    border-radius: 45px;

    &::after {
      padding-bottom: 50%;
    }
  }

  &::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }

  div {
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    font-size: 1.8rem;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
`;
