import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react'

class CategoryQuestions extends Component {

    render() {

        let questionList = this.props.questions.questionData.map((item) => {
            return (

                <Comment.Group>
                <Comment>
                  <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                  <Comment.Content>
                    <Comment.Author> {item.ApplicationUser.UserName}</Comment.Author>
                    <Comment.Metadata>
                      <div>{item.QuestionTime}</div>
                     
                    </Comment.Metadata>
                    <Comment.Text>
                     {item.QuestionTitle}
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
              </Comment.Group>


            )
        })
        return (
            <div>
                {questionList}

            </div>
        );
    }
}

export default CategoryQuestions;