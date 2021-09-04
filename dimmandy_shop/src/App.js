import './App.css';
import HomePage from './pages/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header/header';
import SignInAndSignUp from './pages/signIn-and-signUp/signIn-and-signUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React, { Component } from 'react'


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }
  //to close the subscription to avoid memory leak by calling unsubscribe method
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user});
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          });
          console.log(this.state);
        });

      }
      this.setState({ currentUser: userAuth })
    })
  }
  0
  componentWillUnmount() {
    this.unsubscribeFromAuth(); //this closes the subscription
  }



  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />

        </Switch >
      </div>
    );

  }

}

export default App;
