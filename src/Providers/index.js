import { ConfraternizationProvider } from "./Confraternization";
import { DrinksProvider } from "./Drinks";
import { GraduationProvider } from "./Graduation";
import { WeddingProvider } from "./Wedding";

const Providers = ({ children }) => {
  return (
    <DrinksProvider>
      <WeddingProvider>
        <GraduationProvider>
          <ConfraternizationProvider>{children}</ConfraternizationProvider>
        </GraduationProvider>
      </WeddingProvider>
    </DrinksProvider>
  );
};

export default Providers;
