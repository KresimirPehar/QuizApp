import * as types from '../actions/actionTypes';

const initialState = {
    quizForm: {
        drawing: {
            questionValue: '',
            checked: false,
        },
        empathy: {
            questionValue: '',
            checked: false
        },
        look_quality: {
            questionValue: '',
            checked: false,
        },
        clothes: {
            questionValue: '',
            checked: false
        },
        assume_intentions: {
            questionValue: '',
            checked: false,
        }
    },
    quizResult: {
        submited: false
    },
    resultsList: {
        resultsLoaded: false
    },
    userSelections: {}
};

const onQuestionCheck = (state, action) => ({
    ...state,
    quizForm: {
        ...state.quizForm,
        [action.questionName]: {
            checked: true,
            frontend: action.fValue,
            backend: action.bValue
        }
    },
    userSelections: {
        ...state.userSelections,
        [action.question]: action.answer
    }
});

const getResult = (state, action) => ({
    ...state,
    quizResult: {
        userName: action.userName,
        date: action.date,
        result: action.result,
        submited: true,
        path: action.path
    }
});

const getResultsList = (state, action) => ({
    ...state,
    resultsList: {
        resultsLoaded: true,
        data: action.payload
    }
});

const QuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.QUESTION_CHECK:
            return onQuestionCheck(state, action);

        case types.GET_RESULT:
            return getResult(state, action);

        case types.GET_RESULTSLIST:
            return getResultsList(state, action);

        case types.RESET_VALUES:
            return initialState;

        default:
            return state;
    }
};

export default QuizReducer;