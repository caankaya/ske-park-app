import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/types";
import { toggleBurger } from "../redux/reducers/header";

export default function Header() {
  const dispatch = useAppDispatch();
  const burger = useAppSelector((state) => state.header.burger);

  return (
    <div
      className={`header flex items-center justify-between relative bg-primary laptop:w-1/2 w-full mt-2 mx-5 px-5 py-2 rounded-lg ${
        burger && "rounded-br-none"
      }`}
    >
      <button className="text-secondary">
        <FontAwesomeIcon icon={"fa-solid fa-house" as IconProp} size="lg" />
      </button>
      <p className="text-secondary text-2xl font-bold">SKE PARK</p>
      <button
        onClick={() => {
          dispatch(toggleBurger(burger));
        }}
        className="flex flex-col justify-center items-center"
      >
        <span
          className={`bg-secondary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${burger ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`bg-secondary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${burger ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-secondary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            burger ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div
        className={`absolute bg-primary w-[20%] right-0 top-10 rounded-b-lg ${
          burger ? "opacity-1" : "opacity-0"
        } duration-200`}
      >
        <ul className="text-secondary flex flex-col text-center gap-y-5 py-2">
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
