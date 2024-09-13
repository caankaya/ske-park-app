import { Outlet } from "react-router-dom";
import Header from "./Header";
import InfoModal from "../sub-components/InfoModal";

export default function Layout() {
  return (
    <div className="h-screen w-full bg-base px-2">
      <Header />
      <main>
        <Outlet data-testid="outlet" />
      </main>
      <InfoModal />
    </div>
  );
}
