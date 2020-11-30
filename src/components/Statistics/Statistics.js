import s from './Statistics.module.css';

const Statistics = ({ statisticData, total, percent }) => {
  const { good, neutral, bad } = statisticData;
  return (
    <div className={s.container}>
      <span className={s.title}>Statistics</span>
      <ul className={s.listButtons}>
        <li className={s.listItem}>
          <span className={s.itemTitle}>Good:</span>
          <span className={s.itemValue}>{good}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.itemTitle}>Neutral:</span>
          <span className={s.itemValue}>{neutral}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.itemTitle}>Bad:</span>
          <span className={s.itemValue}>{bad}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.itemTitle}>Total:</span>
          <span className={s.itemValue}>{total}</span>
        </li>
        <li className={s.listItem}>
          <span className={s.itemTitle}>Positive feedback:</span>
          <span className={s.itemValue}>{percent || 0}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
