import React, { useState } from "react";

import FeedbackOptions from "./FeedBackOptions/FeedbackOption";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

import { Feedback_Option } from "../date/Feedback";

import s from "./App.module.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (event) => {
    const { name } = event.target;

    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositive = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const PositiveInterest = countPositive();

  return (
    <div className={s.App}>
      <Section className={s.title} title="Please leave feedback">
        <FeedbackOptions
          options={Feedback_Option}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      {total > 0 ? (
        <Section className={s.title} title="Statistics:">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            totalPositive={PositiveInterest}
          />
        </Section>
      ) : (
        <Notification message={"No feedback has been given"} />
      )}
    </div>
  );
}
