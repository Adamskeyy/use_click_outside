// components
import AnimalList from "./components/AnimalList";
import AnimalSelect from "./components/AnimalSelect";
import Backdrop from "./components/Backdrop";
// styles
import "./App.css";
// tools
import { useClickOutside } from "./components/hooks/useClickOutside";
import { useState } from "react";

// <S>, <T> - generics

const ANIMALS = [
  { id: 1, name: "Dog" },
  { id: 2, name: "Cat" },
  { id: 3, name: "Hamster" },
  { id: 4, name: "Parrot" },
  { id: 5, name: "Spider" },
  { id: 6, name: "Goldfish" },
];

const App = () => {
  const {
    onStartListeningClickOutside,
    onClickOutside,
    waitingOnClickOutside,
  } = useClickOutside();

  const [selectedValue, setSelectedValue] = useState<string>("");
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);

  return (
    <div className="App">
      {/* on select give chosen option super powers (biggest z-index and backdrop, return to normal if backdrop clicked) */}
      <Backdrop
        show={showBackdrop}
        clicked={() => setShowBackdrop((prev) => !prev)}
      />
      <AnimalSelect
        animalOptions={ANIMALS}
        clicked={onStartListeningClickOutside}
      />
      <AnimalList animalOptions={ANIMALS} />
    </div>
  );
};

export default App;
