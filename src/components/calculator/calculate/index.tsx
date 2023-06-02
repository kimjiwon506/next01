import React from "react";

import Input from "../input/input";
import Button from "../button/button";

import * as Styled from "./styled";

export interface ButtonItem {
  text: string;
  background: string;
  color: string;
  type?: string;
}

interface CalculatorButtonProps {
  onClick: (item: ButtonItem) => void;
  calc: {
    inputValue: string;
    buttonArray: ButtonItem[];
  };
}

function Calculate({ calc, onClick }: CalculatorButtonProps) {
  const handleClick = (item: ButtonItem) => {
    onClick(item);
  };

  return (
    <Styled._Container>
      <Styled._Wrap>
        <Input calc={calc} />
        <Styled._ButtonWrap>
          {calc.buttonArray.map((item: ButtonItem) => (
            <Button item={item} onClick={() => handleClick(item)} />
          ))}
        </Styled._ButtonWrap>
      </Styled._Wrap>
    </Styled._Container>
  );
}

export default Calculate;
