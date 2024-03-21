import { useState } from 'react';
import { Form, Link } from 'react-router-dom';

import heroImg from '../images/Home/bonsai_hero-opt-2.png';
import classes from './Hero.module.css';

function Hero() {
  const [email, setEmail] = useState('');

  function handleEmailPath(ev) {
    setEmail(ev.target.value);
  }

  return (
    <div className={classes['page-wrap']}>
      <section className={classes['hero']}>
        <div className={classes['blue-shape']}></div>
        <div className={classes['hero-flex']}>
          <div className={classes['hero-left']}>
            <h1>Everything you need to run your business.</h1>
            <p className={classes['hero-para']}>
              Bonsai’s all-in-one product suite with smart automation lets you focus on your
              passion, not your paperwork.
            </p>
            <Form className={classes['form-start']}>
              <input
                type="email"
                name="email"
                onChange={(ev) => handleEmailPath(ev)}
                placeholder="Enter your email"
              />
              <Link className={classes['form-button']} to={`auth?mode=signup&email=${email}`}>
                START FREE
              </Link>
            </Form>
          </div>
          <div className={classes['hero-right']}>
            <img className={classes['hero-img']} src={heroImg} alt="Hero Image" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Hero;
