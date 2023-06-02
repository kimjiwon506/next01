import React, {
  createContext,
  useState,
  useRef,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface Button {
  text: string;
  background: string;
  color: string;
  type?: string;
}

interface CalculatorContextProps {
  state: {
    inputValue: string;
    buttonArray: Button[];
  };
  actions: {
    calculate: () => void;
    setCalc: React.Dispatch<
      React.SetStateAction<{
        inputValue: string;
        buttonArray: Button[];
      }>
    >;
  };
  shouldSetNumberRef: any;
  prevNumberRef: any;
  currentOperatorRef: any;
}

const CalculatorContext = createContext<CalculatorContextProps>({
  state: { inputValue: "", buttonArray: [] },
  actions: { calculate: () => {}, setCalc: () => {} },
  shouldSetNumberRef: undefined,
  prevNumberRef: undefined,
  currentOperatorRef: undefined,
});

interface CalculatorProviderProps {
  children: ReactNode;
}

const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
  const shouldSetNumberRef = useRef(false);
  const prevNumberRef = useRef(0);
  const currentOperatorRef = useRef(null);
  const [inputValue, setInputValue] = useState<string>("0");
  const [calc, setCalc] = useState<{
    inputValue: string | number;
    buttonArray: Button[];
  }>({
    inputValue: "0",
    buttonArray: [
      { text: "C", background: "#A29D95", color: "#111111" },
      { text: "+/-", background: "#A29D95", color: "#111111" },
      { text: "%", background: "#A29D95", color: "#111111" },
      { text: "÷", background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "7", background: "#484242", color: "#ffffff", type: "number" },
      { text: "8", background: "#484242", color: "#ffffff", type: "number" },
      { text: "9", background: "#484242", color: "#ffffff", type: "number" },
      { text: "x", background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "4", background: "#484242", color: "#ffffff", type: "number" },
      { text: "5", background: "#484242", color: "#ffffff", type: "number" },
      { text: "6", background: "#484242", color: "#ffffff", type: "number" },
      { text: "-", background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "1", background: "#484242", color: "#ffffff", type: "number" },
      { text: "2", background: "#484242", color: "#ffffff", type: "number" },
      { text: "3", background: "#484242", color: "#ffffff", type: "number" },
      { text: "+", background: "#FFB039", color: "#ffffff", type: "operator" },
      { text: "0", background: "#484242", color: "#ffffff", type: "number" },
      { text: ".", background: "#484242", color: "#ffffff", type: "number" },
      { text: "=", background: "#FFB039", color: "#ffffff", type: "operator" },
    ],
  });

  const value = {
    state: {
      inputValue,
      buttonArray: calc.buttonArray,
    },
    actions: {
      calculate: () => {},
      setCalc: setCalc as Dispatch<
        SetStateAction<{ inputValue: string | number; buttonArray: Button[] }>
      >,
    },
    setInputValue,
    shouldSetNumberRef,
    prevNumberRef,
    currentOperatorRef,
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

export { CalculatorContext };
export default CalculatorProvider;
