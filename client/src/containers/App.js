import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import {resetValues} from '../redux/actions/quizActions';
import Home from '../components/Home';
import Results from './Results';
import Quiz from './Quiz';
import QuizResult from '../components/QuizResult';

class App extends Component {
    
    render(){
        return (
            <Switch>
                <Route exact path = '/' component = {Home}/>
                <Route path = '/quiz' component = {Quiz}/>
                <Route path = '/results' component = {Results}/>
                <Route path = '/result' render={() => 
                                <QuizResult 
                                    resetValues={this.props.actions.resetValues}
                                    results={this.props.quizResults}/>}/>
            </Switch>
        );
    }
}

const mapStateToProps = state => ({
    quizResults: state.quiz.quizResult
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({resetValues}, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
