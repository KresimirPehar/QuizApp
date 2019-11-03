import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { getResults } from '../redux/actions/quizActions';
import ResultsList from './ResultsList';

const Results = ({ resultsList, getResults }) => {
    useEffect(() => {
        getResults();
    }, [getResults]);

    return (
        <>
            <Link to='/'>
                <FontAwesome className='backArrow' name='arrow-circle-left' />
            </Link>
            {resultsList.resultsLoaded &&
                <div id='results'>
                    <div className='columns'>
                        <div className='nameColumn'>Name</div>
                        <div className='dateColumn'>Date</div>
                        <div className='resultColumn'>Result</div>
                    </div>
                    {resultsList.data.map((elem, key) =>
                        <ResultsList
                            key={key.toString()}
                            {...elem} />)}
                </div>}
        </>
    );
};

export default connect(state => ({ resultsList: state.quiz.resultsList }), { getResults })(Results);

