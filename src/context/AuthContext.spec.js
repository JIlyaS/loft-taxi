import React from 'react';
import { AuthProvider, AuthContext } from './AuthContext';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils'; 

describe('AuthContext', () => {
  describe('#login', () => {
    it('sets "isLoggedIn to true"', () => {
       let isLoggedIn;
       let login;

       render(
         <AuthProvider>
           <AuthContext.Consumer>
             {(value) => {
               isLoggedIn = value.isLoggedIn;
               login = value.login;
               return null;
             }}
           </AuthContext.Consumer>
         </AuthProvider>
       );

       expect(isLoggedIn).toBe(false);
       act(() => {
         login('mail@mail.ru', "12345678")
       });
       expect(isLoggedIn).toBe(true);
    });
  });
  
  describe('#logout', () => {
    it('sets "isLoggedIn to false"', () => {
       let isLoggedIn;
       let login;
       let logout;

       render(
         <AuthProvider>
           <AuthContext.Consumer>
             {(value) => {
               isLoggedIn = value.isLoggedIn;
               login = value.login;
               logout = value.logout;
               return null;
             }}
           </AuthContext.Consumer>
         </AuthProvider>
       );

       act(() => {
        login('mail@mail.ru', "12345678");
       });

       expect(isLoggedIn).toBe(true);
      
       act(() => {
         logout();
       });

       expect(isLoggedIn).toBe(false);
    });
  });
});