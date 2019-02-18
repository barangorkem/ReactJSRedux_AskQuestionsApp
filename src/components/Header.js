import React, { Component } from 'react';
import { Container, Dropdown, Image, Menu, Visibility } from 'semantic-ui-react';
import { menuStyle, fixedMenuStyle } from '../helpers/styleHelper';
import { Link } from 'react-router-dom';
import {isUserLogin} from '../helpers/tokenAuthentication';
import {connect} from 'react-redux';
import {logout} from '../actions/users';
import {listCategories} from '../actions/categories';
class Header extends Component {


  state = {
    menuFixed: false,
    overlayFixed: false,
  }
  
  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })
  
  componentDidMount()
  {
    this.props.listCategories();
  }


  render() {


    let categoriesList = this.props.categories.categories.map((item) => {
      return (

        <Dropdown.Item key={item.CategoryId} as={Link} to={`/category/${item.CategoryId}`}>{item.CategoryName}</Dropdown.Item>
       
         


      );
  });

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
              {!isUserLogin()?<Menu.Item as={Link} to="/signin">SignIn</Menu.Item>:''}
              {isUserLogin()?<Menu.Item as={Link}  to="/askquestion">AskQuestion</Menu.Item>:''}
              {isUserLogin()?<Menu.Item as={Link}  to="/profile">Profile</Menu.Item>:''}
              {isUserLogin()?<Menu.Item  onClick={this.props.logout}>LogOut</Menu.Item>:''}


              <Menu.Menu position='right'>
                <Dropdown text='Categories' pointing className='link item'>
                  <Dropdown.Menu>
                   {categoriesList}
                   
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
const mapStateToProps=({users,categories})=>{
return {
  users,categories
}
};

const mapDispatchTheProps={
  logout,listCategories
}

export default connect(mapStateToProps,mapDispatchTheProps)(Header);

