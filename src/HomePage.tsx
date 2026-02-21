import { Link } from "react-router";
import { dances } from "./Dance";

const grouped = Object.groupBy(dances, (d) => d.tradition);

export function HomePage() {
  return (
    <main className="m-auto mb-6 flex max-w-7xl flex-col gap-4">
      {Object.keys(grouped)
        .sort((a, b) => a.localeCompare(b))
        .map((tradition) => (
          <div key={tradition}>
            <h2 className="mb-4 text-center text-2xl font-bold">{tradition}</h2>
            <div className="flex flex-wrap justify-center gap-4 align-middle">
              {grouped[tradition]!.map((dance) => (
                <Link
                  className="bg-pine-200 dark:bg-pine-800 rounded-2xl px-4 py-2"
                  to={`/${dance.key}`}
                >
                  {dance.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
    </main>
  );
}
