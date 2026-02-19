export interface Dance {
  name: string;
  key: string;
  stick?: boolean;
  hanky?: boolean;
}

export interface Tradition {
  name: string;
  key: string;
  dances: Dance[];
}

export const traditions: Tradition[] = [
  {
    name: "Adderbury",
    key: "adderbury",
    dances: [
      {
        name: "Blue Bells of Scotland",
        key: "blue-bells-of-scotland",
        stick: true,
      },
      {
        name: "Haste to the Wedding",
        key: "haste-to-the-wedding",
        hanky: true,
      },
      { name: "Lads A'Bunchum", key: "lads-a-bunchum", stick: true },
      { name: "Lollipop Man", key: "lollipop-man", hanky: true },
      { name: "Sweet Jenny Jones", key: "sweet-jenny-jones", stick: true },
    ],
  },
  {
    name: "Bampton",
    key: "bampton",
    dances: [
      { name: "Highland Mary", key: "highland-mary", hanky: true },
      { name: "Old Tom of Oxford", key: "old-tom-of-oxford", hanky: true },
      { name: "The Rose Tree", key: "the-rose-tree", hanky: true },
    ],
  },
  {
    name: "Bledington",
    key: "bledington",
    dances: [
      { name: "Black Joke", key: "black-joke", stick: true },
      { name: "Skirmish", key: "skirmish", stick: true },
      { name: "William and Nancy", key: "william-and-nancy", hanky: true },
      { name: "Young Collins", key: "young-collins", stick: true },
    ],
  },
  {
    name: "Brackley",
    key: "brackley",
    dances: [
      { name: "Jockey to the Fair", key: "jockey-to-the-fair", hanky: true },
    ],
  },
  {
    name: "Fieldtown",
    key: "fieldtown",
    dances: [
      { name: "Balance the Straw", key: "balance-the-straw", stick: true },
      { name: "Banks of the Dee", key: "banks-of-the-dee", hanky: true },
      { name: "Valentine", key: "valentine", hanky: true },
    ],
  },
  {
    name: "Headington",
    key: "headington",
    dances: [{ name: "Constant Billy", key: "constant-billy", stick: true }],
  },
  {
    name: "Lichfield",
    key: "lichfield",
    dances: [
      { name: "Jenny Lind", key: "jenny-lind", stick: true },
      {
        name: "Vandals of Hammerwich",
        key: "vandals-of-hammerwich",
        stick: true,
      },
    ],
  },
];
