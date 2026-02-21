import { Dance as DanceType } from "../dances";

export function Dance({ dance }: { dance: DanceType }) {
  return (
    <main className="m-auto mb-6 flex max-w-7xl flex-col gap-4">
      <header className="mb-1 text-center">
        <h1 className="mb-1 text-3xl font-bold">{dance.name}</h1>
        <p className="text-lg">{dance.tradition}</p>
      </header>
      {dance.component && <dance.component />}
    </main>
  );
}
