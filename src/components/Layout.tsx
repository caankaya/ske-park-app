import { Outlet } from "react-router-dom";
import Header from "./Header";
import ParkingModal from "./ParkingModal";

export default function Layout() {
  return (
    <div className="h-screen w-full bg-base px-2">
      <ParkingModal />
      <Header />
      <Outlet />
    </div>
  );
}
