import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Question from '../components/Question';
import { questionCheck, saveResult } from '../redux/actions/quizActions';
import getQuestions from '../redux/actions/questionsActions';

const moment = require('moment');

const Quiz = ({
  getQuestions,
  questionCheck,
  saveResult,
  data,
  quizForm,
  quizResult,
  userSelections
}) => {
  const [buttonDisabledState, setButtonDisabledState] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  // validate form
  useEffect(() => {
    const anyUnchecked = Object.keys(quizForm).some(
      question => quizForm[question].questionValue === ''
    );
    if (anyUnchecked === false && userName.length > 0)
      setButtonDisabledState(false);
    else setButtonDisabledState(true);
  }, [quizForm, userName.length]);

  const onInputChange = async e => setUserName(e.target.value);

  const onChooseAnswer = async (
    e,
    frontendValue,
    backendValue,
    question,
    answer
  ) => {
    e.persist();
    await questionCheck(
      e.target.name,
      frontendValue,
      backendValue,
      question,
      answer
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    let [fePoints, bePoints] = [0, 0];
    Object.keys(quizForm).forEach(question => {
      fePoints += quizForm[question].frontend;
      bePoints += quizForm[question].backend;
    });
    const date = moment().format('DD MMM YYYY');
    saveResult(userName, date, fePoints, bePoints, userSelections);
  };

  let view = (
    <div id='quiz'>
      <Link to='/'>
        <FontAwesome className='backArrow' name='arrow-circle-left' />
      </Link>
      <input
        className='userNameInput'
        placeholder='Enter your name . . .'
        value={userName}
        onChange={onInputChange}
      />
      <div className='questions'>
        {data.map((question, key) => (
          <Question
            key={key.toString()}
            id={key}
            {...question}
            onClick={onChooseAnswer}
          />
        ))}
      </div>
      <button
        className='submitBtn'
        type='submit'
        onClick={onSubmit}
        disabled={buttonDisabledState}
      >
        Submit
      </button>
    </div>
  );

  if (quizResult.submited === true)
    view = <Redirect to={{ pathname: quizResult.path }} />;

  return view;
};

const mapStateToProps = state => ({
  data: state.data.data,
  quizForm: state.quiz.quizForm,
  quizResult: state.quiz.quizResult,
  userSelections: state.quiz.userSelections
});

export default connect(
  mapStateToProps,
  { getQuestions, questionCheck, saveResult }
)(Quiz);
