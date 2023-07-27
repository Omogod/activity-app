import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";

const Layout = (props) => {
  const { Children } = props;
  return <div className="flex flex-col min-h-screen relative bg-slate-900 text-white">
    <Header />
    <Login />
    <main className="flex-1">
    {Children}
    </main>
    <Footer />
    </div>;
};

export default Layout;
