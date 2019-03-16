import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Question from '../components/Question';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {questionCheck, saveResult} from '../redux/actions/quizActions';
import {getQuestions} from '../redux/actions/questionsActions';
const moment = require('moment');

class Quiz extends Component {

  constructor(props){
    super(props);
    this.state = {
      disableBtn: true,
      userName: '',
    }
  }

  componentDidMount () {
    this.props.actions.getQuestions();
  }

  onInputChange = async (e) => {
    await this.setState({userName: e.target.value});
    this.validateQuizForm();
  }

  onChooseAnswer = async (e, frontendValue, backendValue, question, answer) => {
    e.persist();
    await this.props.actions.questionCheck(e.target.name, frontendValue, backendValue, question, answer);
    this.validateQuizForm();
  }

  onSubmit = (e) => {
    e.preventDefault();
    var [fePoints, bePoints] = [0, 0];
    Object.keys(this.props.quizForm).forEach(question => {
            fePoints += this.props.quizForm[question].frontend;
            bePoints += this.props.quizForm[question].backend;
          })
    const date = moment().format('DD MMM YYYY');
    this.props.actions.saveResult(this.state.userName, date, fePoints, bePoints, this.props.userSelections);   
  }

  validateQuizForm = () => {
    var anyUnchecked = Object.keys(this.props.quizForm)
                            .some(question => this.props.quizForm[question].questionValue === "");
    if (anyUnchecked === false && this.state.userName.length > 0) 
      this.setState({disableBtn: false});
  }


  render() {
      var view = (
          <div id='quiz'>
            <Link to = '/'>
              <FontAwesome className='backArrow' name='arrow-circle-left'/>
            </Link>
            <input className='userNameInput' placeholder='Enter your name . . .' value={this.state.userName} onChange={this.onInputChange}/>
            <div className='questions'>
              {this.props.data.map((question, key) => 
                    <Question key={key} id={key} {...question} onClick={this.onChooseAnswer}/>
              )}
            </div>
            <button className='submitBtn' onClick={this.onSubmit} disabled={this.state.disableBtn}>Submit</button>
          </div>
      )

      if (this.props.quizResult.submited === true)
            view = <Redirect to ={{pathname: this.props.quizResult.path}}/>
         
    return view;
  }
}

const mapStateToProps = state => ({
  data: state.data.data,
  quizForm: state.quiz.quizForm,
  quizResult: state.quiz.quizResult,
  userSelections: state.quiz.userSelections
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators ({getQuestions, questionCheck, saveResult}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

