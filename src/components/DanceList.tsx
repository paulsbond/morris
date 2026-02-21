import { Link } from "react-router";
import { Tradition } from "../dances";

export function DanceList({ tradition }: { tradition: Tradition }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 align-middle">
      {tradition.dances.map((dance) => (
        <Link
          className="bg-pine-200 dark:bg-pine-800 rounded-2xl px-4 py-2"
          to={`/${tradition.key}/${dance.key}`}
        >
          {dance.name}
        </Link>
      ))}
    </div>
  );
}
