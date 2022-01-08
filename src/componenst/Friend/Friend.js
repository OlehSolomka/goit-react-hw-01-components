import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function Friend({ avatar, name, status }) {
  return (
    <li className={s.ListItem}>
      <span
        className={s.Status}
        style={{ backgroundColor: status ? 'green' : 'red' }}
      ></span>
      <img className={s.Image} src={avatar} alt="User avatar" width="48" />
      <p className={s.Text}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
