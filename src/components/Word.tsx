type Props = {};

const Word = (props: Props) => {
  const word = "виселица";
  const guessedLetters = ["и", "в", "б"];

  return (
    <div className="flex gap-2 py-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
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
