import React, { useState, useCallback } from "react";
import { BaseActorProps } from "../types/interfaces";

interface ActorsContextInterface {
  favourites: number[];
  addToFavourites: (actor: BaseActorProps) => void;
  removeFromFavourites: (actor: BaseActorProps) => void;
}

const initialContextState: ActorsContextInterface = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const ActorsContext = React.createContext<ActorsContextInterface>(initialContextState);

const ActorsContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [favourites, setFavourites] = useState<number[]>([]);

  const addToFavourites = useCallback((actor: BaseActorProps) => {
    setFavourites((prev) => {
      if (!prev.includes(actor.id)) {
        return [...prev, actor.id];
      }
      return prev;
    });
  }, []);

  const removeFromFavourites = useCallback((actor: BaseActorProps) => {
    setFavourites((prev) => prev.filter((id) => id !== actor.id));
  }, []);

  return (
    <ActorsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;
