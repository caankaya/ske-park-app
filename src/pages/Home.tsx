import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-y-5 bg-base">
      {/* Dashboard */}
      <Dashboard />

      {/* Parking */}
      <div className="flex w-full flex-col justify-between gap-y-5 laptop:w-1/2 desktop:flex-row desktop:flex-wrap">
        <div className="flex w-full flex-col items-center gap-y-5 rounded-xl bg-secondary shadow-lg desktop:w-[32%]">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>

        <div className="flex w-full flex-col items-center gap-y-5 rounded-xl bg-secondary shadow-lg desktop:w-[32%]">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>

        <div className="flex w-full flex-col items-center gap-y-5 rounded-xl bg-secondary shadow-lg desktop:w-[32%]">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>

        <div className="flex w-full flex-col items-center gap-y-5 rounded-xl bg-secondary shadow-lg desktop:w-[32%]">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>

        <div className="flex w-full flex-col items-center gap-y-5 rounded-xl bg-secondary shadow-lg desktop:w-[32%]">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>

        <div className="flex w-full flex-col items-center gap-y-5 rounded-xl bg-secondary shadow-lg desktop:w-[32%]">
          <div className="flex h-12 w-full items-center justify-center rounded-t-xl bg-success">
            <p>405</p>
          </div>
          <div className="ml-5 self-start">
            <p className="text-sm">
              Numéro de ticket : <b>IJXF7ECWB5</b>
            </p>
            <p className="text-sm">
              Heure d'arrivé : <b>15h30</b>
            </p>
            <p className="text-sm">
              Numéro d'immatricule : <b>DX-785-GF</b>
            </p>
            <p className="text-sm">
              Type de véhicule : <b>Automobile</b>
            </p>
          </div>
          <button className="hover:bg-infohover mb-5 h-8 w-1/2 rounded-lg bg-info text-sm text-secondary duration-300">
            Prendre un ticket
          </button>
        </div>
      </div>
    </div>
  );
}
