import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import classes from './FooterGroup.module.css';

function FooterGroup({ groups }) {
  return (
    <div className={classes['footer-group']}>
      {groups.map((link) => {
        if (link.path) {
          return (
            <NavLink
              key={link.name}
              to={link.path}
              style={link.style ? { marginBottom: '1.25rem' } : undefined}
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ''
              }
            >
              {' '}
              {link.name}
              {link.arrow && <FontAwesomeIcon icon={faChevronDown} size="xs" transform="right-5" />}
            </NavLink>
          );
        } else {
          return <h3 key={link.name}>{link.name}</h3>;
        }
      })}
    </div>
  );
}
export default FooterGroup;
