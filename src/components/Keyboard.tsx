const KEYS: Array<string> = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
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

type Props = {};

const Keyboard = (props: Props) => {
  return (
    <div className="grid grid-cols-7 gap-1 pt-8 sm:grid-cols-12 sm:gap-2">
      {KEYS.map((key) => {
        return (
          <button
            className="border-2 border-black p-1 text-2xl font-bold sm:text-3xl md:p-2 md:text-4xl lg:p-3 lg:text-5xl"
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
