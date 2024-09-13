import { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Parking from "../components/Parking";
import { useAppDispatch, useAppSelector } from "../redux/types";
import { getAllSpots } from "../redux/reducers/spot";
import { getAllVehicles } from "../redux/reducers/vehicle";
import { ISpot } from "../@types/spot";

export default function Home() {
  const dispatch = useAppDispatch();
  const spots = useAppSelector((state) => state.spots.all as ISpot);

  useEffect(() => {
    dispatch(getAllSpots());
    dispatch(getAllVehicles());
  }, [dispatch]);

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-y-5 bg-base pb-10 max-tablet:px-5">
      {/* Dashboard */}
      {<Dashboard />}

      {/* Parking - passe seulement le tableau des spots */}
      {spots && <Parking spots={spots.spots} />}
    </div>
  );
}
