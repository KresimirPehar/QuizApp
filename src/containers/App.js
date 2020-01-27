import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { resetValues } from '../redux/actions/quizActions';
import Home from '../components/Home';
import Results from './Results';
import Quiz from './Quiz';
import QuizResult from '../components/QuizResult';

const App = ({ quizResults, resetValues }) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/quiz' component={Quiz} />
      <Route path='/results' component={Results} />
      <Route
        path='/result'
        render={() => (
          <QuizResult resetValues={resetValues} results={quizResults} />
        )}
      />
    </Switch>
  );
};

export default withRouter(
  connect(
    state => ({ quizResults: state.quiz.quizResult }),
    { resetValues }
  )(App)
);
