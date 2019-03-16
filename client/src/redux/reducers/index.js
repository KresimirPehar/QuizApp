import {combineReducers} from 'redux';
import quiz from './quizReducer';
import data from './questionsReducer';

const rootReducer = combineReducers({
    quiz,
    data
});

export default rootReducer;