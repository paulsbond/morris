import { Video } from "../components/Video";

function Heading2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-1 text-2xl font-bold">{children}</h2>;
}

export function BlueBells() {
  return (
    <>
      <div className="flex justify-center gap-4">
        <p>Long stick</p>
        <p>|</p>
        <p>Double step</p>
        <p>|</p>
        <p>Right foot start</p>
      </div>
      <Heading2>Lyrics</Heading2>
      <p className="italic">
        Oh where, tell me where, has my highland laddie gone?
        <br />
        He's gone to the war with his frilly knickers on.
      </p>
      <Heading2>Figures</Heading2>
      <ol className="list-inside">
        <li className="font-bold">Walk around singing</li>
        <li className="font-bold">Foot up</li>
        <li className="italic">Chorus</li>
        <li className="font-bold">Half gyp</li>
        <li className="italic">Chorus</li>
        <li className="font-bold">Process down (tops down)</li>
        <li className="italic">Chorus</li>
        <li className="font-bold">Process up (bottoms up)</li>
        <li className="italic">Chorus</li>
        <li className="font-bold">Hands around</li>
        <li className="italic">Chorus</li>
        <li className="font-bold">Adderbury Hay</li>
        <li className="italic">Chorus</li>
        <li className="font-bold">Doubles</li>
      </ol>
      <Video id="L0GF4xRvB1Y" />
    </>
  );
}
