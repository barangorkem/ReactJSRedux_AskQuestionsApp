import React, { Component } from 'react';
import {connect} from 'react-redux';
import SignInForm from '../SignInForm';
import {onUserLoginSubmit} from '../../actions/users';
class SignIn extends Component {
  

    componentWillMount()
    {
        debugger
        if(Object.keys(this.props.users.isLoginError).length!==0)
        {
            this.props.users.isLoginError={};
        }
    }


    render() {
        return (
     <SignInForm users={this.props.users} onUserLoginSubmit={this.props.onUserLoginSubmit}></SignInForm>
     
        );
    }
}
const mapStateToProps=({users})=>{
    return{
        users
    }
    
};

const mapDispatchToProps={
    onUserLoginSubmit
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
