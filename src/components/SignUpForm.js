import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';
import {isUserLogin} from '../helpers/tokenAuthentication';
class SignUpForm extends Component {

    state={
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:''
    }
    onChange=e=>
    {
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    onSubmit=e=>
    {
        e.preventDefault();
        console.log(this.state);
        this.props.onNewUserSubmit(this.state);
    };
   

    render() {
  
        return (
            <div>

  {isUserLogin()?<Redirect to="/profile"></Redirect>:<Form  onSubmit={this.onSubmit}>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' id="firstname" name="firstname" value={this.state.firstname} onChange={this.onChange} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' id="lastname" name="lastname" value={this.state.lastname} onChange={this.onChange} />
    </Form.Field>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' id="username" name="username" value={this.state.username} onChange={this.onChange} />
    </Form.Field>
    <Form.Field>    
      <label>Email</label>
      <input placeholder='Email' id="email" name="email" value={this.state.email} onChange={this.onChange} />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' id="password" name="password" value={this.state.password} onChange={this.onChange} />
    </Form.Field>

    <Button type='submit'>Submit</Button>
  </Form> }        
  {this.props.users.Succeeded?'Başarılıdır.':''}
  {Object.keys(this.props.users.error).length===0?'':<h3>Hata oluştu</h3>}
  </div>
        );
    }
}

export default SignUpForm;