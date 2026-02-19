import { traditions } from "../dances";
import { Link } from "react-router";
import { DanceTable } from "../components/DanceTable";

export function Home() {
  return (
    <main className="m-auto mb-6 flex max-w-7xl flex-col gap-4">
      <h1 className="mb-1 text-center text-3xl font-bold">Morris</h1>
      {traditions.map((tradition) => (
        <div key={tradition.key}>
          <h2 className="mb-1 text-2xl font-bold">
            <Link to={`/${tradition.key}`}>{tradition.name}</Link>
          </h2>
          <DanceTable tradition={tradition} />
        </div>
      ))}
    </main>
  );
}
