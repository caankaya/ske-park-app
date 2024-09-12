import { useState } from "react";

export default function Barriers() {
  const [activeButton, setActiveButton] = useState<string>("CLOSE");
  return (
    <div className="flex w-full flex-col items-center justify-center gap-x-5 gap-y-5 rounded-xl bg-secondary p-3 shadow-lg laptop:w-1/2">
      <p className="text-center text-sm">Ouverture manuelle des barrières</p>
      <div className="flex w-full justify-center gap-x-5">
        <button
          className={`size-10 rounded-full bg-success text-secondary duration-300 hover:bg-succeshover ${activeButton === "OPEN" && "scale-110 shadow-lg"}`}
          onClick={() => {
            setActiveButton("OPEN");
          }}
        ></button>
        <button
          className={`size-10 rounded-full bg-error text-secondary duration-300 hover:bg-errorhover ${activeButton === "CLOSE" && "scale-110 shadow-lg"}`}
          onClick={() => {
            setActiveButton("CLOSE");
          }}
        ></button>
      </div>
      <p className="text-sm">
        Etat actuel :{" "}
        <span
          className={
            activeButton === "OPEN"
              ? "font-bold text-success"
              : "font-bold text-error"
          }
        >
          {activeButton}
        </span>
      </p>
    </div>
  );
}
