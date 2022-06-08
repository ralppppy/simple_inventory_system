import React, { Suspense } from "react";
import { Footer, MainContent, MainHeader, SideNav } from "../components";
import { AdminLayoutProps } from "../interface/interfaces";

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src={require("../assets/img/AdminLTELogo.png")}
          alt="AdminLTELogo"
          height="60"
          width="60"
        />
      </div>

      {/* <Suspense fallback={<></>}> */}
      <MainHeader />

      <SideNav />

      <MainContent>{children}</MainContent>
      <Footer />
      {/* </Suspense> */}
    </div>
  );
};

export default AdminLayout;
