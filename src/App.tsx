import { useState } from "react";
import { getRandomWord } from "./getRandomWord";
import Header from "./components/Header";
import Drawing from "./components/Drawing";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

const App = () => {
  const [word, setWord] = useState<string>(getRandomWord());
  return (
    <div className="app flex flex-col items-center px-1">
      <Header />
      <Drawing />
      <Word />
      <Keyboard />
    </div>
  );
};

export default App;
