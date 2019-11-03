import * as types from './actionTypes';
import questions from '../../data/inputFieldList';

const getQuestions = () => ({
    type: types.GET_QUESTIONS,
    payload: questions
});

export default getQuestions;

