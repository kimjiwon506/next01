import CalculatorContainer from "@/container/calculatorContainer";
import CalculatorProvider from "@/context/calculator";
import React from "react";

function CalculatorPage() {
  return (
    <CalculatorProvider>
      <CalculatorContainer />
    </CalculatorProvider>
  );
}

export default CalculatorPage;
