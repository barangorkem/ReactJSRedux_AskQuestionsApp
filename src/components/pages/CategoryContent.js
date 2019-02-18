import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../actions/questions';
class CategoryContent extends Component {

    componentDidMount() {
        this.props.getCategory(this.props.match.params.id);

    }
    componentWillReceiveProps(nextProps){
        debugger
        if(this.props.match.params.id!==nextProps.match.params.id){
          //Perform some operation
          this.props.getCategory(nextProps.match.params.id);
        }
      }
    render() {

        let questionList=this.props.questions.questionData.map((item)=>{
            return (
                <div>
                <h4>{item.QuestionId}</h4>
                <h4>{item.QuestionTitle}</h4>
                <h4>{item.QuestionTime}</h4>
                <h4>{item.ApplicationUser.UserName}</h4>
                </div>
            )
        })
        console.log(this.props)
        return (
            <div>
                <h1>CategoryContent</h1>
                {questionList}
            </div>
        );
    }
}

const mapStateToProps = ({ questions }) => {
    return {
        questions
    }

}
const mapDispatchToProps = {
    getCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryContent);