export interface Dance {
  name: string;
  key: string;
  tradition: string;
  info?: string[];
  song?: string[];
  figures?: string[];
  video?: string;
}

export const dances: Dance[] = [
  {
    name: "Balance the Straw",
    key: "balance-the-straw",
    tradition: "Fieldtown",
  },
  { name: "Banks of the Dee", key: "banks-of-the-dee", tradition: "Fieldtown" },
  { name: "Black Joke", key: "black-joke", tradition: "Bledington" },
  {
    name: "Blue Bells of Scotland",
    key: "blue-bells-of-scotland",
    tradition: "Adderbury",
    info: ["Long stick", "Double step", "Right foot start"],
    song: [
      "Oh where, tell me where, has my highland laddie gone?",
      "He's gone to the war with his frilly knickers on.",
    ],
    figures: [
      "Walk around singing",
      "Foot up",
      "Chorus",
      "Half gyp",
      "Chorus",
      "Process down (tops down)",
      "Chorus",
      "Process up (bottoms up)",
      "Chorus",
      "Hands around",
      "Chorus",
      "Adderbury Hay",
      "Chorus",
      "Doubles",
    ],
    video: "L0GF4xRvB1Y",
  },
  { name: "Constant Billy", key: "constant-billy", tradition: "Headington" },
  {
    name: "Haste to the Wedding",
    key: "haste-to-the-wedding",
    tradition: "Adderbury",
  },
  {
    name: "Highland Mary",
    key: "highland-mary",
    tradition: "Bampton",
  },
  { name: "Jenny Lind", key: "jenny-lind", tradition: "Lichfield" },
  {
    name: "Jockey to the Fair",
    key: "jockey-to-the-fair",
    tradition: "Brackley",
  },
  {
    name: "Lads A'Bunchum",
    key: "lads-a-bunchum",
    tradition: "Adderbury",
  },
  {
    name: "Lollipop Man",
    key: "lollipop-man",
    tradition: "Adderbury",
  },
  {
    name: "Old Tom of Oxford",
    key: "old-tom-of-oxford",
    tradition: "Bampton",
  },
  { name: "Skirmish", key: "skirmish", tradition: "Bledington" },
  {
    name: "Sweet Jenny Jones",
    key: "sweet-jenny-jones",
    tradition: "Adderbury",
  },
  {
    name: "The Rose Tree",
    key: "the-rose-tree",
    tradition: "Bampton",
  },
  { name: "Valentine", key: "valentine", tradition: "Fieldtown" },
  {
    name: "Vandals of Hammerwich",
    key: "vandals-of-hammerwich",
    tradition: "Lichfield",
  },
  {
    name: "William and Nancy",
    key: "william-and-nancy",
    tradition: "Bledington",
  },
  { name: "Young Collins", key: "young-collins", tradition: "Bledington" },
];
