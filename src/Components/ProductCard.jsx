import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classes from './ProductCard.module.css';

import { INSIDE_MENU } from '../INSIDE_MENU';

function ProductCard({ onHide }) {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleShowDropdown(ev) {
    const dropDownItem = ev.target.closest('li').children[0].className.includes('inside-dropdown');
    const rightDropDown = ev.target.closest('div').className.includes('product-container-right');

    if ((ev.type === 'mouseenter' || ev.type === 'mouseover') && (dropDownItem || rightDropDown)) {
      setShowDropdown(true);
    } else if (!dropDownItem && !rightDropDown) {
      setShowDropdown(false);
    }
  }

  return (
    <div className={classes['product-container']} onMouseLeave={() => onHide()}>
      <div className={classes['product-container-left']}>
        <ul className={classes['product-list']}>
          <li
            onMouseEnter={(ev) => handleShowDropdown(ev)}
            onMouseLeave={(ev) => handleShowDropdown(ev)}
          >
            <div
              className={`${classes['inside-dropdown']} ${classes['border-style']}`}
              onMouseOver={(ev) => handleShowDropdown(ev)}
            >
              <div className={classes['product-sub-text']}>
                <h3>Bonsai Workflow</h3>
                <p>Look professional, win more clients and manage your business from one place</p>
              </div>
              {showDropdown && (
                <FontAwesomeIcon icon={faChevronRight} size="lg" transform="right-5" />
              )}
            </div>
          </li>
          <li onMouseEnter={(ev) => handleShowDropdown(ev)}>
            <Link to="bonsai-tax" className={classes['border-style']}>
              <h3>Bonsai Tax</h3>
              <p>Track expenses, maximize tax-writeoffs, and estimate taxes without headache</p>
            </Link>
          </li>
          <li onMouseEnter={(ev) => handleShowDropdown(ev)}>
            <Link to="bonsai-cash" className={classes['border-style']}>
              <h3>Bonsai Cash</h3>
              <p>Bonsai&apos;s all in one financial hub: No fees and lightning fast payouts </p>
            </Link>
          </li>
        </ul>
      </div>
      {showDropdown && (
        <div
          onMouseEnter={(ev) => handleShowDropdown(ev)}
          onMouseLeave={(ev) => handleShowDropdown(ev)}
          className={classes['product-container-right']}
        >
          {INSIDE_MENU.map((item) => (
            <Link className={classes['inside-link']} key={item.name} to={item.path}>
              <section className={classes['inside-title']}>
                <FontAwesomeIcon icon={item.faIcon} size="sm" />
                <h5>{item.name}</h5>
              </section>
              <p>{item.paragraph}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
