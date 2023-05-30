// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return <></>;
// }

import type { ReactElement } from "react";
import Layout from "../components/layout";
import NestedLayout from "../components/nested-layout";
import type { NextPageWithLayout } from "./_app";
import Home from "./home";

const Page: NextPageWithLayout = () => {
  return <div>div</div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
