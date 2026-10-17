import { balanceTheStraw } from "./Dances/BalanceTheStraw";
import { banksOfTheDee } from "./Dances/BanksOfTheDee";
import { blackJoke } from "./Dances/BlackJoke";
import { blueBellsOfScotland } from "./Dances/BlueBellsOfScotland";
import { constantBilly } from "./Dances/ConstantBilly";
import { hasteToTheWedding } from "./Dances/HasteToTheWedding";
import { highlandMary } from "./Dances/HighlandMary";
import { jennyLind } from "./Dances/JennyLind";
import { jockeyToTheFair } from "./Dances/JockeyToTheFair";
import { ladsABunchum } from "./Dances/LadsABunchum";
import { lassOfRichmondHill } from "./Dances/LassOfRichmondHill";
import { laudnamBunches } from "./Dances/LaudnamBunches";
import { oldTomOfOxford } from "./Dances/OldTomOfOxford";
import { skirmish } from "./Dances/Skirmish";
import { sweetJennyJones } from "./Dances/SweetJennyJones";
import { theLollipopMan } from "./Dances/TheLollipopMan";
import { theRoseTree } from "./Dances/TheRoseTree";
import { theValentine } from "./Dances/TheValentine";
import { vandalsOfHammerwich } from "./Dances/VandalsOfHammerwich";
import { williamAndNancy } from "./Dances/WilliamAndNancy";
import { youngCollins } from "./Dances/YoungCollins";

export interface Dance {
  name: string;
  key: string;
  tradition: string;
  info?: string[];
  song?: string[];
  figures?: string[];
  videos?: string[];
  retired?: boolean;
}

export const dances: Dance[] = [
  balanceTheStraw,
  banksOfTheDee,
  blackJoke,
  blueBellsOfScotland,
  constantBilly,
  hasteToTheWedding,
  highlandMary,
  jennyLind,
  jockeyToTheFair,
  ladsABunchum,
  lassOfRichmondHill,
  laudnamBunches,
  oldTomOfOxford,
  skirmish,
  sweetJennyJones,
  theLollipopMan,
  theRoseTree,
  theValentine,
  vandalsOfHammerwich,
  williamAndNancy,
  youngCollins,
];
