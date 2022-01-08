import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';

export default function FriendList({ friends }) {
  return (
    <ul className={s.List}>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
