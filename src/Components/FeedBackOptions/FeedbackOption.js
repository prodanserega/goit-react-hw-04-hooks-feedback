import PropTypes from "prop-types";

import s from "./FeedbackOption.module.css";

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      className={s.button}
      type="button"
      name={feedback}
      key={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) =>
    FeedbackButton({ feedback: option, onLeaveFeedback })
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
