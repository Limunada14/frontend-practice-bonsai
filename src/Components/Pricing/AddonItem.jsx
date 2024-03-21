import { Link } from 'react-router-dom';

import classes from './AddonItem.module.css';

function AddonItem({ title, para, price, month_year, learn }) {
  return (
    <div className={classes.flexAddon}>
      <div className={classes.header}>
        <h3>{title}</h3>
        <p>{para}</p>
        {learn && <Link to="/auth">Learn More</Link>}
      </div>
      <div className={classes.priceContainer}>
        <div className={classes.price}>{price}</div>
        {month_year && <div className={classes.monthYear}>{month_year}</div>}
      </div>
    </div>
  );
}
export default AddonItem;
