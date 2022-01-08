import s from './Profile.module.css';
import PropTypes from 'prop-types';

export default function Profile({
  avatar,
  username = 'Oleh Solomka',
  tag,
  location,
  stats,
}) {
  return (
    <div className={s.Container}>
      <div className={s.ImageContainer}>
        <img src={avatar} alt="User avatar" className={s.Image} />
        <p className={s.Name}>{username}</p>
        <p className={s.Text}>@{tag}</p>
        <p className={s.Text}>{location}</p>
      </div>
      <ul className={s.List}>
        <li className={s.ListItem}>
          <span className={s.Text}>Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.ListItem}>
          <span className={s.Text}>Views </span>
          <span>{stats.views}</span>
        </li>
        <li className={s.ListItem}>
          <span className={s.Text}>Likes </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
