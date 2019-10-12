import * as types from './actionTypes';
import questions from '../../data/inputFieldList';

export const getQuestions = () => ({
    type: types.GET_QUESTIONS, 
    payload: questions
})

