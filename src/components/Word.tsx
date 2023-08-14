type Props = {
  word: string;
  guessedLetters: Array<string>;
};

const Word = ({ word, guessedLetters }: Props) => {
  return (
    <div className="flex gap-2 pt-6 pb-10 text-4xl font-bold uppercase sm:text-5xl md:text-6xl lg:text-7xl">
      {word.split("").map((letter, index) => (
        <span className="border-b-[10px] border-black font-mono" key={index}>
          <span
            className={
              guessedLetters.includes(letter) ? "visible" : "invisible"
            }
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Word;
