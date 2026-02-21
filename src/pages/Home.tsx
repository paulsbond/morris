import { traditions } from "../dances";
import { Link } from "react-router";
import { DanceList } from "../components/DanceList";

export function Home() {
  return (
    <main className="m-auto mb-6 flex max-w-7xl flex-col gap-4">
      {traditions.map((tradition) => (
        <div key={tradition.key}>
          <h2 className="mb-4 text-center text-2xl font-bold">
            <Link to={`/${tradition.key}`}>{tradition.name}</Link>
          </h2>
          <DanceList tradition={tradition} />
        </div>
      ))}
    </main>
  );
}
