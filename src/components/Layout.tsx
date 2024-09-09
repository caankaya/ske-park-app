import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="layout h-screen w-full flex items-start justify-center">
      <Header />
      <Outlet />
    </div>
  );
}
