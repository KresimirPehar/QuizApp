import * as types from './actionTypes';
import axios from 'axios';

export const questionCheck = (questionName, fValue, bValue, question, answer) => ({ 
    type: types.QUESTION_CHECK, 
    questionName, 
    fValue, 
    bValue,
    question,
    answer
})

export const getResult = results => ({
    type: types.GET_RESULT, 
    userName: results.name, 
    date: results.date, 
    result: results.result, 
    path: results.path
})

export const getResultsList = results => ({
    type: types.GET_RESULTSLIST, 
    payload: results  
})

export const resetValues = () => ({
    type: types.RESET_VALUES
})

export const saveResult = (userName, date, fePoints, bePoints, userSelections) => (
    dispatch => 
        axios.post('/results/saveResults', {userName, date, fePoints, bePoints, userSelections})
            .then(response => 
                dispatch(getResult(response.data))
            )
            .catch(err => 
                console.log(`Can't post to /saveResults:`, err))
)

export const getResults = () => (
    dispatch => 
        axios.get('/results/getResults')
            .then(response => {
                dispatch(getResultsList(response.data))
            })
            .catch(err => console.log(`Can't get scores:`, err))
)