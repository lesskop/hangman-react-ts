import { RUSSIAN_NOUNS } from "./russianNouns";

export const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * RUSSIAN_NOUNS.length);
  return RUSSIAN_NOUNS[randomIndex];
};
