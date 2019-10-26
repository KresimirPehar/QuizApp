import React, { Component } from 'react';

class ResultsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswersOnClick: false,
            answers: []
        };
    }

    onResultClick = async () => {
        await this.setState({ showAnswersOnClick: !this.state.showAnswersOnClick });
        if (this.state.showAnswersOnClick && this.state.answers.length === 0) {
            let answers = this.props.userSelections;
            let array = [];
            Object.keys(answers).forEach(function (key) {
                array.push(`${key  } ${  answers[key]}`);
            });
            this.setState({ answers: array });
        }
    }

    render() {
        return (
            <div className='resultsList' onClick={this.onResultClick}>
                <div className='userData'>
                    <div className='userName'>{this.props.name}</div>
                    <div className='userDate'>{this.props.date}</div>
                    <div className='userResult'>{this.props.result}</div>
                </div>
                {this.state.showAnswersOnClick &&
                    <div>
                        {this.state.answers.map((elem, key) => (
                            <div className='answers' key={key}>{elem}</div>
                        ))}
                    </div>}
            </div>
        );
    }
}

export default ResultsList;

