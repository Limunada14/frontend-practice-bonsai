import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import classes from './PriceBanner.module.css';

function PriceBanner({ bannerItem }) {
  return (
    <div className={classes['deal-banner']}>
      <div className={classes.deal}>
        <h3>{bannerItem.title}</h3>
        <p>{bannerItem.para}</p>
        <div className={classes.price}>
          <span className={classes.currency}>$</span>
          {bannerItem.price} <span className={classes.month}>/MONTH</span>
        </div>
        {bannerItem.billed && <div className={classes.billed}>Billed Yearly</div>}
      </div>
      <div>
        <ul>
          {bannerItem.items.map((item, idx) => (
            <li key={idx + 1} className={classes['banner-list-item']}>
              <FontAwesomeIcon icon={faCheck} size="sm" transform="left-5" color="#00a37e" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.bnTop}>
        <Link className={classes['banner-link']} to="/auth">
          Start Free
        </Link>
      </div>
    </div>
  );
}
export default PriceBanner;
