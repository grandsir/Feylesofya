import React from "react";
import { Header } from "./";

type LayoutProps = {
  children: JSX.Element;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
