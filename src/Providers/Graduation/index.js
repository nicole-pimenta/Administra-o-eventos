import { createContext, useContext, useState } from "react";

const GraduationListContext = createContext();

export const GraduationProvider = ({ children }) => {
  const [graduationList, setGraduationList] = useState([]);

  const addToGraduationList = (drink) => {
    setGraduationList([...graduationList, drink]);
  };

  const removeFromGraduationList = (id) => {
    const filteredList = graduationList.filter((drink) => drink.id !== id);
    setGraduationList(filteredList);
  };

  return (
    <GraduationListContext.Provider
      value={{ addToGraduationList, graduationList, removeFromGraduationList }}
    >
      {children}
    </GraduationListContext.Provider>
  );
};

export const useGraduationList = () => useContext(GraduationListContext);
