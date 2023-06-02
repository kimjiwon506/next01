import React, { useRef, useContext, MutableRefObject } from "react";

import { CalculatorContext } from "../context/calculator";
import Calculate, { ButtonItem } from "@/components/calculator/calculate";

export default function CalculatorContainer() {
  const {
    state: calc,
    actions: { setCalc },
    shouldSetNumberRef,
    currentOperatorRef,
    prevNumberRef,
  } = useContext(CalculatorContext);

  // const prevNumberRef = useRef<string | number | undefined>("0");

  const onClick = (item: ButtonItem) => {
    if (item.type === "number") {
      setCalc((prevCalc) => {
        const inputValue = shouldSetNumberRef.current
          ? item.text
          : prevCalc.inputValue.replace(/(^0+)/, "") + item.text;

        shouldSetNumberRef.current = false;

        return {
          ...prevCalc,
          inputValue,
        };
      });
    }

    const calculatorOperate = (prev: number, cur: number, oper: string) => {
      const prevNumber = Number(prev);
      const currentNumber = Number(cur);

      if (oper === "+") {
        return prevNumber + currentNumber;
      }
      if (oper === "-") {
        return prevNumber - currentNumber;
      }
      if (oper === "x") {
        return prevNumber * currentNumber;
      }
      if (oper === "÷") {
        return prevNumber / currentNumber;
      }
      if (oper === ".") {
        return currentNumber + ".";
      }
    };

    if (item.type === "operator") {
      switch (item.text) {
        case "+":
          prevNumberRef.current = calculatorOperate(
            Number(prevNumberRef.current),
            Number(calc.inputValue),
            "+"
          );
          break;
        case "-":
          prevNumberRef.current =
            prevNumberRef.current === 0
              ? calc.inputValue
              : calculatorOperate(
                  Number(prevNumberRef.current),
                  Number(calc.inputValue),
                  "-"
                );
          break;
        case "x":
          prevNumberRef.current =
            prevNumberRef.current === 0
              ? calc.inputValue
              : calculatorOperate(
                  Number(prevNumberRef.current),
                  Number(calc.inputValue),
                  "x"
                );
          break;
        case "÷":
          prevNumberRef.current =
            prevNumberRef.current === 0
              ? calc.inputValue
              : calculatorOperate(
                  Number(prevNumberRef.current),
                  Number(calc.inputValue),
                  "÷"
                );
          break;
        case "=":
          let operate: string | null | undefined = currentOperatorRef.current;
          prevNumberRef.current =
            prevNumberRef.current === 0
              ? calc.inputValue
              : calculatorOperate(
                  Number(prevNumberRef.current),
                  Number(calc.inputValue),
                  operate || ""
                );
          break;
        default:
          return;
      }
      currentOperatorRef.current = item.text;
      shouldSetNumberRef.current = true;
      setCalc({
        ...calc,
        inputValue:
          prevNumberRef.current === 0 ? "0" : String(prevNumberRef.current),
      });
    }

    if (item.text === "C") {
      prevNumberRef.current = 0;
      calc.inputValue = "0";
      setCalc({ ...calc, inputValue: "0" });
      shouldSetNumberRef.current = false;
    }
  };

  return <Calculate calc={calc} onClick={onClick} />;
}
