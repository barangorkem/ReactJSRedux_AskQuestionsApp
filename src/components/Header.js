import React, { Component } from 'react';
import { Container, Dropdown, Image, Menu, Visibility } from 'semantic-ui-react';
import { menuStyle, fixedMenuStyle } from '../helpers/styleHelper';
import { Link } from 'react-router-dom';
import {isUserLogin} from '../helpers/tokenAuthentication';
import {connect} from 'react-redux';
import {logout} from '../actions/users';
class Header extends Component {


  state = {
    menuFixed: false,
    overlayFixed: false,
  }
  
  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })
  


  render() {
    const { menuFixed } = this.state
    
    return (
      <div>
          <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
              </Menu.Item>
              <Menu.Item header>Project Name</Menu.Item>

              {!isUserLogin()?<Menu.Item as={Link} to="/signup">SignUp</Menu.Item>:''}
              {!isUserLogin()?<Menu.Item as={Link}  to="/signin">SignIn</Menu.Item>:''}

              {isUserLogin()?<Menu.Item as={Link} to="/profile">Profile</Menu.Item>:''}
              {isUserLogin()?<Menu.Item  onClick={this.props.logout}>LogOut</Menu.Item>:''}


              <Menu.Menu position='right'>
                <Dropdown text='Dropdown' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}
const mapStateToProps=({users})=>{
return {
  users
}
};

const mapDispatchTheProps={
  logout
}

export default connect(mapStateToProps,mapDispatchTheProps)(Header);

