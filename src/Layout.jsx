import { Outlet } from "react-router-dom";
import Navbar from "./Ashwin_feat/Navigation";
import Footer from "./Ashwin_feat/footer";
const UserLayout = () => {
  return (
    <div className="h-screen w-[100%]">
      {/* <Navigation/> */}
      <Navbar />
      <Outlet /> {/* Content specific to the route will be rendered here */}
      <Footer />
    </div>
  );
};

export default UserLayout;
