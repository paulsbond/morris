import { DanceList } from "../components/DanceList";
import { Tradition as TraditionType } from "../dances";

export function Tradition({ tradition }: { tradition: TraditionType }) {
  return (
    <main className="m-auto mb-6 flex max-w-7xl flex-col gap-4">
      <h1 className="mb-1 text-center text-3xl font-bold">{tradition.name}</h1>
      <DanceList tradition={tradition} />
    </main>
  );
}
