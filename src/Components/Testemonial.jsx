import quote from '../images/quote-icon.svg';
import classes from './Testemonial.module.css';

function Testemonial() {
  return (
    <div className={classes['testemonial-wrapper']}>
      <div className={classes['testemonial-block']}>
        <img src={quote} alt="Quote Image" />
        <p className={classes.huge}>
          &ldquo;I did a lot of research before switching to Bonsai from another invoicing service.
          The ability to send and sign contracts was a game changer for me. No one else offers such
          a seamless process from proposal to contract to invoice. It has saved me a lot of time and
          lets me focus on creative work.&rdquo;
        </p>
        <p className={classes.author}>Kevin Tudball</p>
        <p className={classes.ocupation}>Illustrator</p>
      </div>
      <div className={classes['testemonial-block']}>
        <img src={quote} alt="Quote Image" />
        <p className={classes.huge}>
          &ldquo;I did a lot of research before switching to Bonsai from another invoicing service.
          The ability to send and sign contracts was a game changer for me. No one else offers such
          a seamless process from proposal to contract to invoice. It has saved me a lot of time and
          lets me focus on creative work.&rdquo;
        </p>
        <p className={classes.author}>Kevin Tudball</p>
        <p className={classes.ocupation}>Illustrator</p>
      </div>
    </div>
  );
}
export default Testemonial;
