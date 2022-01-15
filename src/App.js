import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import Section from './components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedbackId => {
    switch (feedbackId) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const TotalFeedback = good + neutral + bad;
  const PositiveFeedbackPercentage = ((good / TotalFeedback) * 100).toFixed(0);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onIncrement={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {TotalFeedback ? (
          <Statistics
            options={{ good, neutral, bad }}
            total={TotalFeedback}
            positivePercentage={PositiveFeedbackPercentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </>
  );
}
