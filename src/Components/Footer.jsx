import FooterGroup from './FooterGroup';

import classes from './Footer.module.css';

import { footGroups } from '../FOOTER_DATA';

function Footer() {
  return (
    <footer>
      <div className={classes['footer-group-flex']}>
        <FooterGroup groups={footGroups[0]} />
        <FooterGroup groups={footGroups[1]} />
        <FooterGroup groups={footGroups[2]} />
      </div>
    </footer>
  );
}
export default Footer;
