import { usePriceContext } from './PriceProvider';

import PriceBanner from './PriceBanner';

import classes from './PriceContainer.module.css';

function PriceContainer() {
  const { priceItems } = usePriceContext();
  return (
    <div className={classes.flex}>
      {priceItems.map((priceItem) => (
        <PriceBanner key={priceItem.id} bannerItem={priceItem} />
      ))}
    </div>
  );
}
export default PriceContainer;
