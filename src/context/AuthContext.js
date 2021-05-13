import React, { Component } from 'react';

const AuthContext = React.createContext(null);

const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {
  state = {
    email: null,
    password: null,
    isLoggedIn: false,
  };

  login = (email, password) => {
    this.setState({ 
      email,
      password,
      isLoggedIn: true
     });
  }

  logout = () => {
    this.setState({ 
      email: null,
      password: null,
      isLoggedIn: false 
    });
  }

  render () {
    const { children } = this.props;
    const { isLoggedIn } = this.state;

    return (
      <AuthContext.Provider
        value={{
          isLoggedIn,
          login: this.login,
          logout: this.logout
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider, AuthConsumer, AuthContext };
