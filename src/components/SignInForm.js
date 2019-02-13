import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import  { Redirect } from 'react-router-dom';
import {isUserLogin} from '../helpers/tokenAuthentication';
class SignInForm extends Component {
    state={
        username:'',
        password:''
    };


   
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onUserLoginSubmit(this.state);
    }

    render() {
        return (
            <div>
                  

    
    {isUserLogin()?<Redirect to="/profile"></Redirect>: 
     <Form  onSubmit={this.onSubmit}>
      <Form.Field>    
      <label>Username</label>
      <input placeholder='Username' id="username" name="username" value={this.state.username} onChange={this.onChange} />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' id="password" name="password" value={this.state.password} onChange={this.onChange} />
    </Form.Field>

    <Button type='submit'>Submit</Button>
  </Form> 

}
{Object.keys(this.props.users.isLoginError).length!==0?<h4>Hata var</h4>:''}
  
  


            </div>
           
        );
    }
}

export default SignInForm;