import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserClaims} from '../../actions/users';
import {isUserLogin} from '../../helpers/tokenAuthentication';
class Profile extends Component {


    componentDidMount()
    {
        debugger
        if(isUserLogin())
        {
            this.props.getUserClaims();
        }
        
        
    }
    
    render() {
        return (
            <div>
                <h2>Profile</h2>
                {isUserLogin()?<div><h3>Profile</h3><button type="button" onClick={this.logout}>LogOut</button></div>
                :<Redirect to="/signin"></Redirect>}
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
    getUserClaims
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);