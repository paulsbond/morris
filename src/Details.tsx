function Heading2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-1 text-2xl font-bold">{children}</h2>;
}

function Heading3({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-1 text-lg font-bold">{children}</h3>;
}

export function BlueBells() {
  return (
    <>
      <p>
        Tradition: Adderbury
        <br />
        Long stick
        <br />
        Double step
      </p>
      <p>
        Sticks held in the right hand parallel to the body with the elbow at
        90&deg;.
      </p>
      <p>Right foot start.</p>
      <ol className="list-inside list-decimal">
        <li>Walk around singing</li>
        <li>Foot up</li>
        <li>Chorus</li>
        <li>Half gyp</li>
        <li>Chorus</li>
        <li>Process down (tops down)</li>
        <li>Chorus</li>
        <li>Process up (bottoms up)</li>
        <li>Chorus</li>
        <li>Hands around</li>
        <li>Chorus</li>
        <li>Adderbury Hay</li>
        <li>Chorus</li>
        <li>Doubles</li>
      </ol>
      <Heading2>Walk around singing</Heading2>
      <p>
        Oh where tell me where has my highland laddie gone?
        <br />
        He's gone to the war with his frilly knickers on.
      </p>
      <p>Feet together jump. Clash with partner.</p>
      <Heading2>Foot up</Heading2>
      <p>
        Facing the top of the set. Double step forward for one. Double step on
        the spot for one. Backstep twice to return to place. Feet together jump.
        Clash with partner. Repeat.
      </p>
      <Heading2>Chorus</Heading2>
      <p>
        Hold stick with right hand in the middle and left hand at the base. Odds
        stick first. Odds double, evens double. x2. Odds single, evens single.
        x2. Clash x2. Repeat.
      </p>
      <Heading2>Half gyp</Heading2>
      <p>
        Facing partner. Pass right shoulder for one. Double step to travel to
        your partner's space. One double step on the spot. Two backsteps to
        return to place. Feet together jump. Clash with partner. Repeat for left
        shoulder.
      </p>
      <Heading2>Chorus</Heading2>
      <Heading2>Process down (tops down)</Heading2>
      <p>
        Top partners (1 and 2) turn inwards to meet shoulder to shoulder facing
        bottom of the set. Middles (3 and 4) step out. Tops double step down for
        one. Double step on the spot for one. Backstep twice to return to place.
        Feet together jump. Clash with partner for tops and middles only. Tops
        and middles turn inwards to meet shoulder to shoulder facing downward.
        Repeat stepping. Bottoms (5 and 6) step out. Feet together jump. Clash
        with partner once all have returned to place.
      </p>
      <Heading2>Chorus</Heading2>
      <Heading2>Process up (bottoms up)</Heading2>
      <p>As process down but tops and bottoms swap.</p>
      <Heading2>Chorus</Heading2>
      <Heading2>Hands around</Heading2>
      <p>
        Switch stick to left hand. Join right hands with partner and turn
        clockwise. Use one double step to reach partner's place and one double
        step on the spot. While double stepping on the spot your stick hand
        should be fully extended to the left. Single step back to place
        continuing clockwise. Release partner's hand when back to place. Feet
        together jump clash. Switch stick to right hand and repeat figure
        anti-clockwise.
      </p>
      <Heading2>Chorus</Heading2>
      <Heading2>Adderbury Hay</Heading2>
      <p>Double stepping throughout.</p>
      <Heading3>Tops</Heading3>
      <p>
        Pass middles right shoulder for one double step. Pass bottoms left
        shoulder for one double step. Reach the bottom of the set, turn, pass
        middles left shoulder, pass bottoms right shoulder back to place. Feet
        together jump, clash.
      </p>
      <Heading3>Middles</Heading3>
      <p>
        Pass tops right shoulder, reach the top, turn. Pass bottoms right
        shoulder. Pass tops left shoulder. Reach the bottom of the set. Turn.
        Pass bottoms left shoulder back to place. Feet together jump, clash.
      </p>
      <Heading3>Bottoms</Heading3>
      <p>
        Wait. Pass tops left shoulder. Pass middles right shoulder. Reach the
        top of the set. Turn. Pass tops right shoulder. Pass middles left
        shoulder back to place. Feet together jump, clash.
      </p>
      <Heading2>Chorus</Heading2>
      <Heading2>Doubles</Heading2>
      <p>
        Double-time sticking as in chorus figure. Finish with sticks up, crossed
        with partner, facing the top of the set.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/L0GF4xRvB1Y?si=a92IEH6fz0IT60LY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p>
        Try OpenSheetMusicDisplay
        https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/wiki/Getting-Started
      </p>
      <img src="/music/blue-bells.png" alt="" />
    </>
  );
}
