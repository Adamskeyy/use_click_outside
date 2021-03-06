// tools
import { useState, useCallback } from "react";

// Stwórz hooka useClickOutside, który bedzie działać np z customowymi
// componentami typu dropdown lub select:

export const useClickOutside = () => {
  const [listening, setListening] = useState<boolean>(false);

  const onStartListeningClickOutside = useCallback(() => {
    // const style = { zIndex: 1000 };
    setListening(true);
    // if listening className = "withZIndex"
    // return style;
  }, []);
  const waitingOnClickOutside = useCallback(() => {
    return listening;
  }, [listening]);
  const onClickOutside = useCallback(() => {
    setListening(false);
  }, []);
  return {
    onStartListeningClickOutside,
    waitingOnClickOutside,
    onClickOutside,
  };
};

// który będzie działać wg poniższych wytycznych:

// działanie 1:
// -- zwraca prop onStartListeningClickOutside
// --- jeśli ta funkcja zostanie wywołana dany komponent zyskuje z-index najwyższy na stronie
// --- pod komponentem pojawia się półprzeźroczyste ciemne tło, w które można kliknąć zamykając komponent

// działanie 2:
// -- zwraca prop waitingOnClickOutside
// --- zwraca true/false jeśli została wywołana metoda onStartListeningClickOutside

// działanie 3:
// -- prop onClickOutside
// --- jesli ta funkcja zostanie wywołana komponent wraca na swoje miejsce z odpowiednim z-index
// --- znika półprzeźroczyste szare tło spod komponentu
