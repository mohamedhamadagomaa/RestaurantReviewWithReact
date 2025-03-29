import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/index.js";
import Map from "../Components/Map.jsx";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section className="align-element py-2">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
