import { leaveSpot, toggleLeaveSPotModal } from "../redux/reducers/spot";
import { useAppDispatch, useAppSelector } from "../redux/types";

export default function LeaveSpotModal({
  reference,
  number,
}: {
  reference: string;
  number: number;
}) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.spots.leaveSpotModal);
  console.log("reference :", reference);
  console.log("number :", number);

  return (
    <dialog
      open={isOpen}
      className="fixed inset-0 z-20 h-screen w-full bg-primary/70"
    >
      <div className="h-30 absolute left-1/2 top-1/2 m-auto w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-secondary p-5 shadow-xl">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="absolute right-2 top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-secondary"
            onClick={() => {
              dispatch(toggleLeaveSPotModal());
            }}
          >
            ✕
          </button>
        </form>
        <p className="mb-4 text-center font-medium uppercase">
          libérer la place
        </p>

        <p className="mb-4 text-center text-sm">
          Vous voulez libérer la place ?
        </p>
        <div className="flex items-center justify-between gap-x-5">
          <button
            className="mb-5 h-8 w-1/2 rounded-lg bg-success text-sm text-secondary duration-300 hover:bg-succeshover"
            onClick={() => {
              dispatch(leaveSpot({ reference: reference, spotNumber: number }));
            }}
          >
            Valider
          </button>
          <button
            className="mb-5 h-8 w-1/2 rounded-lg bg-warning text-sm text-secondary duration-300 hover:bg-warninghover"
            onClick={() => {
              dispatch(toggleLeaveSPotModal());
            }}
          >
            Abandonner
          </button>
        </div>
      </div>
    </dialog>
  );
}
