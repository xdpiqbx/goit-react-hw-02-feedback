import { Component } from 'react';

import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';

import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = type => {
    switch (type) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        console.log('Criminal value! =)');
        break;
    }
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    return (
      <div className={s.App}>
        <Feedback onIncrement={this.increment} />
        <Statistics
          statisticData={this.state}
          total={this.countTotalFeedback()}
          percent={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
