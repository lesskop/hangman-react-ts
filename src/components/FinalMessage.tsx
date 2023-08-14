type Props = {
  word: string;
  won: boolean;
  lost: boolean;
  playAgain: () => void;
};

const FinalMessage = ({ word, won, lost, playAgain }: Props) => {
  let title: string = "";

  if (won) {
    title = "Казнить нельзя, помиловать 😇";
  } else if (lost) {
    title = "Казнить, нельзя помиловать 💀";
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center text-center">
      <div className="absolute z-50 h-[100vh] w-[100vw] bg-black bg-opacity-80"></div>
      <div className="absolute z-50 flex w-[90vw] max-w-screen-sm flex-col items-center justify-center rounded-xl bg-white px-4 py-10 shadow-2xl">
        <h3 className="pb-4 text-2xl font-bold">{title}</h3>
        {lost && <p className="text-xl">{`Загаданное слово: ${word}`}</p>}
        <button
          className="mt-4 rounded-md border-2 border-black px-4 py-2 text-xl font-bold hover:bg-black hover:text-white"
          onClick={playAgain}
        >
          Играть ещё!
        </button>
      </div>
    </div>
  );
};

export default FinalMessage;
