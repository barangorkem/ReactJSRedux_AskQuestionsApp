import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../actions/questions';
import CategoryQuestions from '../CategoryQuestions';
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

       
        console.log(this.props)
        return (
            <div>
                <h1>CategoryContent</h1>
                <br></br>
                <CategoryQuestions questions={this.props.questions}></CategoryQuestions>
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