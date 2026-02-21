import { Dance } from "./dances";

function BasicInfo({ info }: { info: string[] }) {
  return (
    <div className="flex justify-center">
      {info.map((item, index) => (
        <p key={index} className="border-l px-3 first:border-l-0">
          {item}
        </p>
      ))}
    </div>
  );
}

function Song({ song }: { song: string[] }) {
  return (
    <div className="italic">
      {song.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

function Figures({ figures }: { figures: string[] }) {
  return (
    <>
      <hr className="h-px w-full border-0 bg-neutral-400 dark:bg-neutral-600" />
      <div>
        {figures.map((figure, index) => (
          <p
            key={index}
            className={
              figure === "Chorus"
                ? "text-neutral-600 italic dark:text-neutral-400"
                : "font-bold"
            }
          >
            {figure}
          </p>
        ))}
      </div>
    </>
  );
}

function Video(props: { id: string }) {
  return (
    <iframe
      className="aspect-video w-lg max-w-full"
      src={`https://www.youtube-nocookie.com/embed/${props.id}`}
      allowFullScreen
    ></iframe>
  );
}

export function DancePage({ dance }: { dance: Dance }) {
  return (
    <main className="m-auto mb-6 flex max-w-7xl flex-col items-center gap-5 text-center">
      <header className="text-center">
        <h1 className="mb-1 text-3xl font-bold">{dance.name}</h1>
        <p className="text-lg">{dance.tradition}</p>
      </header>
      {dance.info && <BasicInfo info={dance.info} />}
      {dance.song && <Song song={dance.song} />}
      {dance.figures && <Figures figures={dance.figures} />}
      {dance.video && <Video id={dance.video} />}
    </main>
  );
}
