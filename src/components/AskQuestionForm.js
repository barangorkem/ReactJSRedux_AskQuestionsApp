import React, { Component } from 'react';
import '../style/style.css';
import { isUserLogin } from '../helpers/tokenAuthentication';
import { Redirect } from 'react-router-dom';

class AskQuestionForm extends Component {

    state = {

        QuestionTitle: '',
        QuestionTime: '',
        CategoryId:''        
    };




    onChange = (e) => {
        debugger
        const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };


        this.setState({
            [e.target.name]: e.target.value,
            QuestionTime: new Date().toLocaleDateString('en-US', DATE_OPTIONS),
        });

    };
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.insertQuestion(this.state);

    }


    render() {

        let durationBody = this.props.categories.categories.map((item) => {
            return (


                <option key={item.CategoryId} value={item.CategoryId} >
                    {item.CategoryName}
                </option>


            );
        });
        return (
            <div>
                {isUserLogin() ? <div>
                    <h4>Ask AskQuestion</h4>
                    <form onSubmit={this.onSubmit}>

                        <div className="ui form">

                            <div className="field">
                                <label>Short Text</label>
                                <textarea rows="2" id="QuestionTitle" name="QuestionTitle" value={this.state.QuestionTitle} className="textareaStyle" onChange={this.onChange} ></textarea>
                            </div>
                        </div>
                        <br />
                        <select className="form-control" onChange={this.onChange} name="CategoryId" value={this.state.CategoryId} >
                            {durationBody}
                        </select>
                        <br />
                        <button type="submit" className="ui button">Ask</button>
                    </form>


                </div > : <Redirect to="/signin"></Redirect>}
            </div>

        );
    }
}



export default AskQuestionForm;