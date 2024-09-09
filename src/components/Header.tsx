import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="header bg-primary w-1/2 m-auto mt-2 h-10 rounded-lg flex items-center justify-start">
        <button className="text-secondary ml-2 absolute">
          <FontAwesomeIcon icon={"fa-solid fa-house" as IconProp} size="lg" />
        </button>
        <p className="text-secondary text-2xl font-bold m-auto">SKE PARK</p>
        <button onClick={handleClick} className="flex flex-col justify-center items-center mr-2">
          <span
            className={`bg-secondary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
          ></span>
          <span
            className={`bg-secondary block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`bg-secondary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
}
