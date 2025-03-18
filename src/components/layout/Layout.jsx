import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Navigation = () => {
  return (
    <div className="bg-content-bg">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Navigation;
