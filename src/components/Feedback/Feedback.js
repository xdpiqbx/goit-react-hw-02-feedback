import s from './Feedback.module.css';

const Feedback = ({ onIncrement }) => {
  return (
    <div className={s.container}>
      <span className={s.title}>Feedback</span>
      <ul className={s.listButtons}>
        <li className={s.listItem}>
          <button className={s.button} onClick={() => onIncrement('good')}>
            Good
          </button>
        </li>
        <li className={s.listItem}>
          <button className={s.button} onClick={() => onIncrement('neutral')}>
            Neutral
          </button>
        </li>
        <li className={s.listItem}>
          <button className={s.button} onClick={() => onIncrement('bad')}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
