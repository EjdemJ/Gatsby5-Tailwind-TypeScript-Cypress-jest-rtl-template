import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Sidebar from "../components/sidebar";
import Main from "../components/main";
import PlayControls from "../components/playControls";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="flex">
      <Sidebar />
      <Main />
      <PlayControls />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
