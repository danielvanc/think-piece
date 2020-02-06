import React, { Component, createContext } from 'react';
import { firestore, auth, createUserProfileDocument } from '../firebase';

export const UsersContext = createContext();

class UsersProvider extends Component {

  state = { user: null };
  
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth);
      this.setState({ user });
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user } = this.state;
    const { children } = this.props;
    return (
      <UsersContext.Provider value={user}>{children}</UsersContext.Provider>
    )
  }
}

export default UsersProvider;