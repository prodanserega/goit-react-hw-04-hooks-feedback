import PropTypes from "prop-types";

import Notification from "../Notification/Notification";

import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, totalPositive }) => {
  return (
    <>
      {total > 0 && (
        <ul className={s.statisticsItem}>
          <li className={s.statisticsList}>Good:{good}</li>
          <li className={s.statisticsList}>Neutral:{neutral}</li>
          <li className={s.statisticsList}>Bad:{bad}</li>
          <li className={s.statisticsList}>Total:{total}</li>
          <li className={s.statisticsList}>totalPositive:{totalPositive}</li>
        </ul>
      )}
      {total === 0 && <Notification message="No Feedback given" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  totalPositive: PropTypes.number.isRequired,
};

export default Statistics;
