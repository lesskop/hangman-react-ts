import { getRandomWord } from "./getRandomWord";

const App = () => {
  return (
    <div className="app flex items-center justify-center px-10 text-4xl font-bold">
      <p>
        Случайное слово: {getRandomWord()}
      </p>
    </div>
  );
};

export default App;
