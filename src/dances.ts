import { ComponentType } from "react";
import { BlueBells } from "./dances/BlueBells";

export interface Dance {
  name: string;
  key: string;
  tradition: string;
  component?: ComponentType;
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
    component: BlueBells,
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
