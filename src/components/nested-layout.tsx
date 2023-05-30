import React from "react";

interface Props {
  children: React.ReactNode;
}

const NestedLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default NestedLayout;
