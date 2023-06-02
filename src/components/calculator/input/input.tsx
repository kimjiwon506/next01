import React from "react";
import * as Styled from "./styled";

interface InputProps {
  calc: {
    inputValue: string | number;
  };
}
const Input: React.FC<InputProps> = ({ calc }) => {
  return (
    <div>
      {calc.inputValue === Infinity ? (
        <Styled._Input type="text" value={"infinity"} readOnly />
      ) : (
        <Styled._Input
          type="number"
          value={calc.inputValue === Infinity ? "Error" : calc.inputValue || ""}
          readOnly
        />
      )}
    </div>
  );
};
export default Input;
