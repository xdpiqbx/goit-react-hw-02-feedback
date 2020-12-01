import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={s.listButtons}>
      <li className={s.listItem}>
        <button className={s.button} onClick={() => onLeaveFeedback('good')}>
          Good
        </button>
      </li>
      <li className={s.listItem}>
        <button className={s.button} onClick={() => onLeaveFeedback('neutral')}>
          Neutral
        </button>
      </li>
      <li className={s.listItem}>
        <button className={s.button} onClick={() => onLeaveFeedback('bad')}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
