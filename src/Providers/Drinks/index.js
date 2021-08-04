import { createContext, useEffect, useState, useContext } from "react";
import api from "../../services/api";

const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
  useEffect(() => {
    api.get("/beers").then((response) => setBeers(response.data));
  }, []);

  const [beers, setBeers] = useState([]);

  return (
    <DrinksContext.Provider value={{ beers }}>
      {children}
    </DrinksContext.Provider>
  );
};

export const useDrinks = () => useContext(DrinksContext);
