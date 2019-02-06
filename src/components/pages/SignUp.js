import React, { Component } from 'react';
import SignUpForm from '../SignUpForm';
import {connect} from 'react-redux';
import {onNewUserSubmit} from '../../actions/users';
class SignUp extends Component {
    render() {

        return (
            <div>
                <SignUpForm users={this.props.users} onNewUserSubmit={this.props.onNewUserSubmit}></SignUpForm>
            </div>
        );
    }
}

const mapStateToProps=({users})=>{
    return{
        users
    }
    
};

const mapDispatchToProps={
    onNewUserSubmit
}



export default connect(mapStateToProps,mapDispatchToProps)(SignUp);