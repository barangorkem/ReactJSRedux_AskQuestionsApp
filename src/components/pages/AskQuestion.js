import React, { Component } from 'react';
import AskQuestionForm from '../AskQuestionForm';
import {insertQuestion} from '../../actions/questions';
import {listCategories} from '../../actions/categories';
import {isUserLogin} from '../../helpers/tokenAuthentication';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class AskQuestion extends Component {

    componentDidMount()
    {
        this.props.listCategories();
        
    }

    render() {
        return (
            <div>
                {isUserLogin()?<AskQuestionForm categories={this.props.categories} listCategories={this.props.listCategories} insertQuestion={this.props.insertQuestion}></AskQuestionForm>:<Redirect to="/signin"></Redirect>}
            </div>
        );
    }
}

const mapStateToProps=({questions,users,categories})=>{
    return{
        questions,
        users,
        categories
    }
    
}

const mapDispatchToProps={
    insertQuestion,
    listCategories

}

export default connect(mapStateToProps,mapDispatchToProps)(AskQuestion);