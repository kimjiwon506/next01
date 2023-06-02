import React from "react";
import * as Styled from "./styled";

interface CalculatorButtonProps {
  item: any;
  onClick: () => void;
}

export default function CalculatorButton({
  item,
  onClick,
}: CalculatorButtonProps) {
  return (
    <>
      <Styled._Button
        value={item.text}
        key={item.index}
        type="button"
        background={item.background}
        color={item.color}
        onClick={onClick}
        className={item.text === "0" ? "zero" : ""}
      >
        <div>{item.text}</div>
      </Styled._Button>
    </>
  );
}
