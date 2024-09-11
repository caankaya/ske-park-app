import { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Parking from "../components/Parking";
import { useAppDispatch, useAppSelector } from "../redux/types";
import { getAllSpots } from "../redux/reducers/spot";
import { ISpot } from "../@types/spot";

export default function Home() {
  const dispatch = useAppDispatch();
  const spots = useAppSelector((state) => state.spots.all);

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-y-5 bg-base">
      {/* Dashboard */}
      <Dashboard />

      {/* Parking */}
      <Parking spots={spots as ISpot[]} />
    </div>
  );
}
