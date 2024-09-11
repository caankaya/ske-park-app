import { useForm, SubmitHandler } from "react-hook-form";
import { ITicket } from "../@types/ticket";
import { useState } from "react";

export default function ParkingModal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ITicket>();

  const [focusedInputs, setFocusedInputs] = useState({
    immatriculation: false,
    type: false,
  });

  const { immatriculation, type } = watch();

  const onSubmit: SubmitHandler<ITicket> = (data) => console.log(data);

  // Fonction pour gérer le focus d'un input
  const handleFocus = (inputName: string) => {
    setFocusedInputs((prev) => ({ ...prev, [inputName]: true }));
  };

  const handleBlur = (inputName: string) => {
    setFocusedInputs((prev) => ({ ...prev, [inputName]: false }));
  };

  return (
    <dialog open={true} className="absolute z-20 h-screen w-full bg-primary/70">
      <div className="m-auto size-80 translate-y-1/2 rounded-xl bg-secondary p-5 shadow-xl">
        <p className="mb-10 text-center font-medium uppercase">
          entrée de véhicule
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 flex flex-col items-center gap-y-10 text-sm"
        >
          {/* Immatriculation */}
          <div className="relative flex w-full flex-col items-center">
            <label
              htmlFor="immatriculation"
              className={`absolute left-2 ${focusedInputs.immatriculation || immatriculation ? "-top-2" : "top-3"} bg-secondary px-2 text-xs duration-300`}
            >
              Immatriculation
            </label>
            <input
              type="text"
              className="h-10 w-full rounded-md border border-primary pl-5 text-sm outline-none"
              {...register("immatriculation", {
                required: "L'immatriculation est requise",
                pattern: {
                  value: /^[A-Z]{2}-\d{3}-[A-Z]{2}$/,
                  message:
                    "Le format de l'immatriculation est invalide. Format attendu : AA-123-AA",
                },
                onBlur() {
                  handleBlur("immatriculation");
                },
              })}
              onFocus={() => handleFocus("immatriculation")}
            />
            {errors.immatriculation && (
              <p className="text-error ml-1 mr-auto text-xs">
                {errors.immatriculation.message}
              </p>
            )}
          </div>

          {/* Type de véhicule */}
          <div className="relative flex w-full flex-col items-center">
            <label
              htmlFor="type"
              className={`absolute left-2 ${focusedInputs.type || type ? "-top-2" : "top-3"} bg-secondary px-2 text-xs duration-300`}
            >
              Type de véhicule
            </label>
            <select
              className="h-10 w-full rounded-md border border-primary pl-4 text-sm outline-none"
              {...register("type", {
                required: "Le type de véhicule est requis",
                validate: (value) =>
                  value === "Car" ||
                  value === "Motor" ||
                  "Le type de véhicule doit être 'Automobile' ou 'Moto'",
              })}
              onFocus={() => handleFocus("type")}
              onBlur={() => handleBlur("type")}
            >
              <option value="" disabled hidden selected></option>
              <option value="Car">Automobile</option>
              <option value="Motor">Moto</option>
            </select>
            {errors.type && (
              <p className="text-error ml-1 mr-auto text-xs">
                {errors.type.message}
              </p>
            )}
          </div>

          {/* Bouton de validation */}
          <button
            type="submit"
            className="mb-5 h-8 w-1/2 rounded-lg bg-success text-sm text-secondary duration-300 hover:bg-succeshover"
          >
            Valider
          </button>
        </form>
      </div>
    </dialog>
  );
}
