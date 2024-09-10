import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="w-full h-screen px-2 bg-base">
      <Header />
      <Outlet />
    </div>
  );
}
