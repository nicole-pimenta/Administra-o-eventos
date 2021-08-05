import { createContext, useContext, useState } from "react";

const WeddingListContext = createContext();

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addToWeddingList = (drink) => {
    setWeddingList([...weddingList, drink]);
  };

  const removeFromWeddingList = (id) => {
    const filteredList = weddingList.filter((drink) => drink.id !== id);
    setWeddingList(filteredList);
  };

  return (
    <WeddingListContext.Provider
      value={{ addToWeddingList, removeFromWeddingList, weddingList }}
    >
      {children}
    </WeddingListContext.Provider>
  );
};

export const useWeddingList = () => useContext(WeddingListContext);
