import { Dance as DanceType } from "../dances";

export function Dance({ dance }: { dance: DanceType }) {
  return (
    <main className="m-auto mb-6 flex max-w-7xl flex-col gap-4">
      <h2 className="mb-1 text-2xl font-bold">{dance.name}</h2>
      <p>
        {dance.stick && "Stick"}
        {dance.stick && dance.hanky && "/"}
        {dance.hanky && "Hanky"}
      </p>
      {dance.component && <dance.component />}
    </main>
  );
}
