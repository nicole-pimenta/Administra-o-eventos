import { DrinksProvider } from "./Drinks";
import { WeddingProvider } from "./Wedding";

const Providers = ({ children }) => {
  return (
    <DrinksProvider>
      <WeddingProvider>{children}</WeddingProvider>
    </DrinksProvider>
  );
};

export default Providers;
