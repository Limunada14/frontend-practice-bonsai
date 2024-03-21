import { usePriceContext } from './PriceProvider';

import AddonItem from './AddonItem';

function AddonSection() {
  const { addonItems } = usePriceContext();

  return (
    <section>
      <h1>Super charge your work with add-ons</h1>
      {addonItems.map((item) => (
        <AddonItem key={item.id} {...item} />
      ))}
    </section>
  );
}
export default AddonSection;
