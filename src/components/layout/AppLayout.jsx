import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const AppLayout = () => {
  const location = useLocation();
  const footerHiddenPrefixes = [
    "/events/coming",
    "/events/past",
  ];
  const shouldShowFooter = !footerHiddenPrefixes.some((p) => location.pathname.startsWith(p));
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default AppLayout;


