class Dance {
  constructor(
    public name: string,
    public weapon: string,
  ) {}
}

const traditions = [
  {
    tradition: "Bledington",
    dances: [
      new Dance("Black Joke", "Stick"),
      new Dance("Skirmish", "Stick"),
      new Dance("William and Nancy", "Hankies"),
      new Dance("Young Collins", "Stick"),
    ],
  },
  {
    tradition: "Adderbury",
    dances: [
      new Dance("Blue Bells of Scotland", "Stick"),
      new Dance("Lads A'Bunchum", "Stick"),
      new Dance("Lollipop Man", "Hankies"),
      new Dance("Sweet Jenny Jones", "Stick"),
    ],
  },
  {
    tradition: "Fieldtown",
    dances: [
      new Dance("Balance the Straw", "Stick"),
      new Dance("Banks of the Dee", "Hankies"),
      new Dance("Valentine", "Hankies"),
    ],
  },
  {
    tradition: "Bampton",
    dances: [
      new Dance("Highland Mary", "Hankies"),
      new Dance("Old Tom of Oxford", "Hankies"),
      new Dance("The Rose Tree", "Hankies"),
    ],
  },
  {
    tradition: "Lichfield",
    dances: [
      new Dance("Jenny Lind", "Stick"),
      new Dance("Vandals of Hammerwich", "Stick"),
    ],
  },
  {
    tradition: "Headington",
    dances: [new Dance("Constant Billy", "Stick")],
  },
  {
    tradition: "Brackley",
    dances: [new Dance("Jockey to the Fair", "Hankies")],
  },
];

function Row({ dance }: { dance: Dance }) {
  return (
    <tr>
      <td className="pr-4">{dance.name}</td>
      <td>{dance.weapon}</td>
    </tr>
  );
}

export function Home() {
  return (
    <main className="m-auto mb-6 flex max-w-7xl flex-col gap-4">
      <h1 className="mb-1 text-center text-3xl font-bold">Morris</h1>

      {traditions.map(({ tradition, dances }) => (
        <div key={tradition}>
          <h2 className="mb-1 text-2xl font-bold">{tradition}</h2>
          <table>
            {dances.map((dance) => (
              <Row key={dance.name} dance={dance} />
            ))}
          </table>
        </div>
      ))}
    </main>
  );
}
