import { Component } from "react";
import React from "react";

import FeedbackOptions from "./FeedBackOptions/FeedbackOption";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

import { Feedback_Option } from "../date/Feedback";

import s from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositive = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    //console.log(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const totalPositive = this.countPositive();
    return (
      <div className={s.App}>
        <Section className={s.title} title="Please leave feedback">
          <FeedbackOptions
            options={Feedback_Option}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section className={s.title} title="Statistics:">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            totalPositive={totalPositive}
          />
        </Section>
      </div>
    );
  }
}

export default App;
