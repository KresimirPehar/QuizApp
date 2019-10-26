import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { getResults } from '../redux/actions/quizActions';
import ResultsList from './ResultsList';

class Results extends Component {

    componentDidMount() {
        this.props.actions.getResults();
    }

    render() {
        return (
            <div>
                <Link to='/'>
                    <FontAwesome className='backArrow' name='arrow-circle-left' />
                </Link>
                {this.props.resultsList.resultsLoaded &&
                    <div id='results'>
                        <div className='columns'>
                            <div className='nameColumn'>Name</div>
                            <div className='dateColumn'>Date</div>
                            <div className='resultColumn'>Result</div>
                        </div>
                        {this.props.resultsList.data.map((elem, key) =>
                            <ResultsList
                                key={key}
                                {...elem} />)}
                    </div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    resultsList: state.quiz.resultsList
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ getResults }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);

