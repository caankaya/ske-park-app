import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="h-screen w-full bg-base px-2">
      <Header />
      <Outlet />
    </div>
  );
}
