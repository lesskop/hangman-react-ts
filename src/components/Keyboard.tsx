const KEYS: Array<string> = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];

type Props = {
  correctGuessedLetters: Array<string>;
  incorrectGuessedLetters: Array<string>;
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  correctGuessedLetters: correctLetters,
  incorrectGuessedLetters: incorrectLetters,
  addGuessedLetter: addLetter,
}: Props) => {
  return (
    <div className="grid grid-cols-8 gap-1 sm:grid-cols-12 sm:gap-2">
      {KEYS.map((key) => {
        const lowerCaseKey = key.toLowerCase();
        const isCorrect = correctLetters.includes(lowerCaseKey);
        const isIncorrect = incorrectLetters.includes(lowerCaseKey);

        return (
          <button
            className={`border-2 border-black p-1 text-2xl font-bold  sm:text-3xl md:p-2 md:text-4xl lg:p-3 lg:text-5xl ${
              isCorrect
                ? "bg-green-700 text-white cursor-not-allowed"
                : isIncorrect
                ? "bg-red-700 text-white cursor-not-allowed"
                : "hover:bg-black hover:text-white"
            }`}
            key={key}
            disabled={isCorrect || isIncorrect}
            onClick={() => addLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
