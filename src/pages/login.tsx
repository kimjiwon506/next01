import type { ReactElement } from "react";
import NestedLayout from "../components/nested-layout";
import type { NextPageWithLayout } from "./_app";

const Login: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export default Login;
