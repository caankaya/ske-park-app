import Barriers from "../sub-components/Barriers";
import Counter from "../sub-components/Counter";
import Distribution from "../sub-components/Distribution";

export default function Dashboard() {
  return (
    <div className="flex w-full flex-col items-center gap-5 laptop:w-1/2 laptop:flex-row laptop:items-stretch">
      {/* Ouverture manuelle des barrières */}
      <Barriers />
      {/* Compteur du parking */}
      <Counter />
      {/* Motors / Cars */}
      <Distribution />
    </div>
  );
}
