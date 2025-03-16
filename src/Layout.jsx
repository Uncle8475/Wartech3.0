import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      {/* <Navigation/> */}
      <h1>Navbar</h1>
      <Outlet /> {/* Content specific to the route will be rendered here */}
      <h1>Footer</h1>
    </div>
  );
};

export default UserLayout;
