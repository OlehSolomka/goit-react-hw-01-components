import s from './Statistic.module.css';
import PropTypes from 'prop-types';
import colors from 'storage/colors';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.Section}>
      {title && <h2 className={s.Header}>{title}</h2>}
      <ul className={s.List}>
        {stats.map(stat => (
          <li
            className={s.ListItem}
            key={stat.id}
            style={{
              backgroundColor: (function () {
                let random = 0 + Math.random() * (colors.length + 1 - 0);
                return colors[Math.floor(random)].hex;
              })(),
            }}
          >
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
