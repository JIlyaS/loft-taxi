import React, { Component } from 'react';

import { AuthProvider, AuthConsumer } from '../context/AuthContext';


function withAuth(WrappedComponent) {
  return class extends Component {
    static displayName = 'withAuth';
     render () {
       return <AuthConsumer>
         {
           contextProps => (<WrappedComponent {...contextProps} {...this.props} />)
         }
       </AuthConsumer>;
     }
  }
}

export {AuthProvider, AuthConsumer, withAuth};

