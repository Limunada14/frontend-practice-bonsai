import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import logo from '/Bonsai_Logo.svg';
import classes from './Navi.module.css';
import ProductCard from './ProductCard';

function Navi() {
  const [showCard, setShowCard] = useState(false);

  function handleHideCard() {
    setShowCard(false);
  }

  return (
    <div className={classes.sticky}>
      <nav className={classes['main-nav']}>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Bonsai Logo" />
          </Link>
        </div>
        <div className={classes['flex-items']}>
          <ul className={classes['nav-links']}>
            <li>
              <Link
                onMouseEnter={() => setShowCard(true)}
                onMouseOut={() => setShowCard(false)}
                to="/product"
                className={classes['arrow-link']}
              >
                Product
                <FontAwesomeIcon icon={faChevronDown} size="xs" transform="right-5" />
              </Link>
              {showCard && <ProductCard onHide={handleHideCard} />}
            </li>
            <li>
              <Link to="/templates" className={classes['arrow-link']}>
                Templates
                <FontAwesomeIcon icon={faChevronDown} size="xs" transform="right-5" />
              </Link>
            </li>
            <li>
              <Link to="/pricings">Pricings</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>

          <div className={classes['sign-up']}>
            <Link className="button-main invert" to="auth?mode=login">
              LOG IN
            </Link>
            <Link className="button-main" to="auth?mode=signup">
              START FREE
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navi;
