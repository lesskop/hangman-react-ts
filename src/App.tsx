import { useEffect, useState, useCallback } from "react";
import { getRandomWord } from "./getRandomWord";
import Header from "./components/Header";
import Drawing from "./components/Drawing";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import FinalMessage from "./components/FinalMessage";

const App = () => {
  const [playable, setPlayable] = useState<boolean>(true);
  const [word, setWord] = useState<string>(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<Array<string>>([]);

  const correctGuessedLetters = guessedLetters.filter((letter) =>
    word.includes(letter),
  );
  const incorrectGuessedLetters = guessedLetters.filter(
    (letter) => !word.includes(letter),
  );

  const lost: boolean = incorrectGuessedLetters.length >= 6;
  const won: boolean = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    setGuessedLetters((currentLetters) => {
      return currentLetters.includes(letter.toLowerCase())
        ? currentLetters
        : [...currentLetters, letter.toLowerCase()];
    });
  }, []);

  const keyboardHandler = useCallback((e: KeyboardEvent) => {
    const key = e.key.toLowerCase();

    if (!key.match(/^[а-я]$/)) return;

    if (guessedLetters.includes(key)) return;

    e.preventDefault();
    addGuessedLetter(key);
  }, []);

  useEffect(() => {
    if (playable) {
      document.addEventListener("keypress", keyboardHandler);
    } else {
      document.removeEventListener("keypress", keyboardHandler);
    }

    return () => {
      document.removeEventListener("keypress", keyboardHandler);
    };
  }, [playable, keyboardHandler]);

  useEffect(() => {
    if (won || lost) {
      setPlayable(false);
    } else {
      setPlayable(true);
    }
  }, [won, lost]);

  const playAgain = () => {
    setPlayable(true);
    setGuessedLetters([]);
    setWord(getRandomWord());
  };

  return (
    <div className="app flex flex-col items-center px-1">
      <Header />
      <Drawing numberOfGuesses={incorrectGuessedLetters.length} />
      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard
        correctGuessedLetters={correctGuessedLetters}
        incorrectGuessedLetters={incorrectGuessedLetters}
        addGuessedLetter={addGuessedLetter}
      />
      {(won || lost) && (
        <FinalMessage word={word} won={won} lost={lost} playAgain={playAgain} />
      )}
    </div>
  );
};

export default App;
