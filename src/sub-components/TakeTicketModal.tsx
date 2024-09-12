import { useForm } from "react-hook-form";
import { ITicket } from "../@types/ticket";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/types";
import { toogleTicketModal } from "../redux/reducers/spot";
import { clearMessage, getTicket } from "../redux/reducers/ticket";

export default function TakeTicketModal({ number }: { number: number }) {
  const dispatch = useAppDispatch();
  const ticketModal = useAppSelector((state) => state.spots.ticketModal);
  const error = useAppSelector((state) => state.tickets.message);
  console.log("error :", error);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ITicket>();

  const [focusedInputs, setFocusedInputs] = useState({
    immatriculation: false,
    type: false,
  });

  const { immatriculation, type } = watch();

  const onSubmit = (data: ITicket) => {
    dispatch(getTicket({ ...data, number }));
  };

  // Fonction pour gérer le focus d'un input
  const handleFocus = (inputName: string) => {
    setFocusedInputs((prev) => ({ ...prev, [inputName]: true }));
  };

  const handleBlur = (inputName: string) => {
    setFocusedInputs((prev) => ({ ...prev, [inputName]: false }));
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(clearMessage());
      }, 5000);
    }

    if (!error && !errors) {
      reset({
        immatriculation: "",
        type: "",
      });
    }
  }, [dispatch, error, reset, errors]);

  return (
    <dialog
      open={ticketModal}
      className="fixed inset-0 z-20 h-screen w-full bg-primary/70"
    >
      <div className="m-auto size-80 translate-y-1/2 rounded-xl bg-secondary p-5 shadow-xl">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="absolute right-2 top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-secondary"
            onClick={() => {
              dispatch(toogleTicketModal());
              reset();
            }}
          >
            ✕
          </button>
        </form>
        <p className="mb-4 text-center font-medium uppercase">
          entrée de véhicule
        </p>
        {error && <p className="text-center text-xs text-error">{error}</p>}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-7 flex flex-col items-center gap-y-10 text-sm"
        >
          {/* Immatriculation */}
          <div className="relative flex w-full flex-col items-center">
            <label
              htmlFor="immatriculation"
              className={`pointer-events-none absolute left-2 ${focusedInputs.immatriculation || immatriculation ? "-top-2" : "top-3"} bg-secondary px-2 text-xs duration-300`}
            >
              Immatriculation
            </label>
            <input
              type="text"
              className="h-10 w-full rounded-md border border-primary pl-5 text-sm outline-none"
              {...register("immatriculation", {
                required: "L'immatriculation est requise",
                pattern: {
                  value: /^[A-Z]{2,3}-\d{2,3}-[A-Z]{2,3}$/,
                  message:
                    "Le format de l'immatriculation est invalide. Format attendu : AA-12-AA ou AAA-123-ABC.",
                },
                onBlur() {
                  handleBlur("immatriculation");
                },
              })}
              onFocus={() => handleFocus("immatriculation")}
            />
            {errors.immatriculation && (
              <p className="ml-1 mr-auto text-xs text-error">
                {errors.immatriculation.message}
              </p>
            )}
          </div>

          {/* Type de véhicule */}
          <div className="relative flex w-full flex-col items-center">
            <label
              htmlFor="type"
              className={`pointer-events-none absolute left-2 ${focusedInputs.type || type ? "-top-2" : "top-3"} bg-secondary px-2 text-xs duration-300`}
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
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option value="Car">Automobile</option>
              <option value="Motor">Moto</option>
            </select>
            {errors.type && (
              <p className="ml-1 mr-auto text-xs text-error">
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
