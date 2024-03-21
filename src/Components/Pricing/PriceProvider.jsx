import { createContext, useState, useContext } from 'react';

// Components
import HeaderPrice from './HeaderPrice';
import PriceContainer from './PriceContainer';
import AddonSection from './AddonSection';

// Data
import { addonData_A, addonData_B } from './ADDON_DATA';
import { priceData_A, priceData_B } from './PRICING_DATA';

const PriceContext = createContext();

export function usePriceContext() {
  const ctx = useContext(PriceContext);

  if (!ctx) {
    throw new Error('Price related state is out of context');
  }

  return ctx;
}

function PriceProvider() {
  const [ballX, setBallX] = useState(0);
  const [addonItems, setAddonItems] = useState(addonData_A);
  const [priceItems, setPriceItems] = useState(priceData_A);

  function toggleBall() {
    setBallX((prevValue) => (prevValue === 21 ? 0 : 21));
    setAddonItems((prevValue) => (prevValue === addonData_A ? addonData_B : addonData_A));
    setPriceItems((prevValue) => (prevValue === priceData_A ? priceData_B : priceData_A));
  }

  const contextValue = {
    ballX,
    addonItems,
    priceItems,
    toggleBall,
  };

  return (
    <PriceContext.Provider value={contextValue}>
      <HeaderPrice />
      <PriceContainer />
      <AddonSection />
    </PriceContext.Provider>
  );
}
export default PriceProvider;
