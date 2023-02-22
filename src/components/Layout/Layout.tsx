import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="max-w-xl m-auto grid grid-cols-1 place-content-center w-full h-screen p-4">
      <Header />
      <main className="w-full block">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
