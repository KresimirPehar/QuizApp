import * as types from '../actions/actionTypes';

const initialState = {
  data: []
};

const getQuestions = (state, action) => ({
  data: action.payload
});

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS:
      return getQuestions(state, action);
    default:
      return state;
  }
};

export default questionsReducer;
