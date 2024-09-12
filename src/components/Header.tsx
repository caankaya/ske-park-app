import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/types";
import { toggleBurger, toggleInfoModal } from "../redux/reducers/header";

export default function Header() {
  const dispatch = useAppDispatch();
  const burger = useAppSelector((state) => state.header.burger);
  const isOpen = useAppSelector((state) => state.header.infoModal);
  console.log("isOpen :", isOpen);

  return (
    <div
      className={`sticky top-5 z-10 m-auto flex w-full items-center justify-between rounded-lg bg-primary px-5 py-2 laptop:w-1/2 ${
        burger && "rounded-br-none"
      }`}
    >
      <button
        className="text-secondary"
        onClick={() => {
          dispatch(toggleInfoModal(true));
        }}
      >
        <FontAwesomeIcon
          icon={"fa-solid fa-circle-exclamation" as IconProp}
          size="xl"
          bounce={true}
        />
      </button>
      <p className="text-2xl font-bold text-secondary">SKE PARK</p>
      <button
        onClick={() => {
          dispatch(toggleBurger(burger));
        }}
        className="flex flex-col items-center justify-center"
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-secondary transition-all duration-300 ease-out ${
            burger ? "translate-y-1 rotate-45" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-secondary transition-all duration-300 ease-out ${
            burger ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-secondary transition-all duration-300 ease-out ${
            burger ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div
        className={`absolute right-0 top-10 w-1/3 rounded-b-lg bg-primary laptop:w-[20%] ${
          burger ? "opacity-1" : "opacity-0"
        } duration-200`}
      >
        <ul className="flex flex-col gap-y-5 py-2 text-center text-sm text-secondary">
          <li>
            <Link to={"/#"}>Lien 1</Link>
          </li>
          <li>
            <Link to={"/#"}>Lien 2</Link>
          </li>
          <li>
            <Link to={"/#"}>Lien 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
