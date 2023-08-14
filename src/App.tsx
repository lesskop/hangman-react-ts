import { useEffect, useState, useCallback } from "react";
import { getRandomWord } from "./getRandomWord";
import Header from "./components/Header";
import Drawing from "./components/Drawing";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

const App = () => {
  const [word, setWord] = useState<string>(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<Array<string>>([]);

  const correctGuessedLetters = guessedLetters.filter((letter) =>
    word.includes(letter),
  );
  const incorrectGuessedLetters = guessedLetters.filter(
    (letter) => !word.includes(letter),
  );

  const addGuessedLetter = useCallback((letter: string) => {
    setGuessedLetters((currentLetters) => {
      return currentLetters.includes(letter.toLowerCase())
        ? currentLetters
        : [...currentLetters, letter.toLowerCase()];
    });
  }, []);

  const keyboardHandler = useCallback((e: KeyboardEvent) => {
    const key = e.key.toLowerCase();

    if (!key.match(/^[а-яё]$/)) return;

    if (guessedLetters.includes(key)) return;

    e.preventDefault();
    addGuessedLetter(key);
  }, []);

  useEffect(() => {
    document.addEventListener("keypress", keyboardHandler);

    return () => {
      document.removeEventListener("keypress", keyboardHandler);
    };
  }, [keyboardHandler]);

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
    </div>
  );
};

export default App;
