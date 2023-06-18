import { useState } from "react";
import FeedBackOptions from "components/FeedbackOptions/FeedBackOptions";
import Section from "components/Section/Section";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";

export const App = () => {
  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = buttonType =>{
switch (buttonType){
  case 'good':
    setGood(state => state + 1);
    break;
  case 'neutral':
    setNeutral(neutral+1);
      break;
  case 'bad':
    setBad(bad+1);
        break;
  default:
        return;
}
  }
  const totalFeedback = good + neutral + bad;
  const positivePercentageFeedback = Math.round((good / totalFeedback) * 100) || 0;

     return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedBackOptions
        options = {options}
        onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

     <Section title="Statistics">
        {
          totalFeedback ? (
          <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={totalFeedback} 
          positivePercentageFeedback={positivePercentageFeedback} />
      ) : (<Notification message="There is no feedback" />)
        }
        </Section>
        
    </div>
  )
 
};
