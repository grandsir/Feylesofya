import React from "react";
import { Header } from "./";

type LayoutProps = {
  children: JSX.Element;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="sticky top-0">{children}</div>
    </>
  );
};

export default Layout;
