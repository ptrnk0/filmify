import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Navigation = () => {
  return (
    <div className="bg-content-bg flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Navigation;
