import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Route,Switch } from 'react-router-dom';
import { Container} from 'semantic-ui-react';
import Footer from './components/Footer';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import Layout from './container/Layout';
import AskQuestion from './components/pages/AskQuestion';
import CategoryContent from './components/pages/CategoryContent';

class App extends Component {

     

  render() {

    return (
      <div className="App">




        <Container text>


        <Layout >
          <Switch>
          <Route path="/signin" exact component={SignIn}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/askquestion" exact component={AskQuestion}></Route>
          <Route path="/category/:id" exact component={CategoryContent}></Route>
          </Switch>
          </Layout>





        </Container>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
