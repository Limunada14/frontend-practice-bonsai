import { motion } from 'framer-motion';
import { usePriceContext } from './PriceProvider';

import classes from './HeaderPrice.module.css';

function HeaderPrice() {
  const { ballX, toggleBall } = usePriceContext();

  return (
    <div className={classes['header-flex']}>
      <div>
        <h1>Plans & Pricing</h1>
      </div>
      <div className={classes.offer}>
        <div>MONTHLY</div>
        <div onClick={toggleBall} className={classes['toggle-container']}>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ballX }}
            className={classes.ball}
          ></motion.div>
        </div>
        <div className={classes.yearly}>YEARLY</div>
        <img
          className={classes['offer-img']}
          src="http://web.archive.org/web/20221127205034im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9d7255d3886a6103fb12a9_FREE-text.svg"
          alt="2 months free image"
        />
      </div>
    </div>
  );
}
export default HeaderPrice;
