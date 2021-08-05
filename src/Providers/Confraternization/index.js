import { createContext, useContext, useState } from "react";

const ConfraternizationListContext = createContext();

export const ConfraternizationProvider = ({ children }) => {
  const [confraternizationList, setConfraternizationList] = useState([]);

  const addToConfraternizationList = (drink) => {
    setConfraternizationList([...confraternizationList, drink]);
  };

  const removeFromConfraternizationList = (id) => {
    const filteredList = confraternizationList.filter(
      (drink) => drink.id !== id
    );
    setConfraternizationList(filteredList);
  };

  return (
    <ConfraternizationListContext.Provider
      value={{
        addToConfraternizationList,
        confraternizationList,
        removeFromConfraternizationList,
      }}
    >
      {children}
    </ConfraternizationListContext.Provider>
  );
};

export const useConfraternizationList = () =>
  useContext(ConfraternizationListContext);
