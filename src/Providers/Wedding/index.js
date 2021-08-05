import { createContext, useContext, useState } from "react";

const WeddingListContext = createContext();

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addToList = (drink) => {
    setWeddingList([...weddingList, drink]);
  };

  const removeFromList = (id) => {
    const filteredList = weddingList.filter((drink) => drink.id !== id);
  };

  return (
    <WeddingListContext.Provider
      value={{ addToList, removeFromList, weddingList }}
    >
      {children}
    </WeddingListContext.Provider>
  );
};

export const useWeddingList = () => useContext(WeddingListContext);
