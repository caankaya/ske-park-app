import Dashboard from "../components/Dashboard";
import Parking from "../components/Parking";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-y-5 bg-base">
      {/* Dashboard */}
      <Dashboard />

      {/* Parking */}
      <Parking />
    </div>
  );
}
