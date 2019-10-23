import React, { useState, useEffect } from 'react';
import NewUserPage from './views/NewUserPage.js';
import Nav from './components/Nav.jsx';
import { SinglePost } from './views/SinglePost.js';
import Landing from './views/Landing.js';
import Topics from './views/Topics.js';
import Dashboard from './views/Dashboard.js';
import TopicFeed from './views/TopicFeed.js';
import { Route } from "react-router-dom";
import { UserSession, AppConfig } from 'blockstack';
import './App.css';

const appConfig = new AppConfig( [ 'store_write', 'publish_data' ] );
const userSession = new UserSession( { appConfig: appConfig } );

const App =  ( props ) => {
  const [ data, setData ] = useState( null );

  const handleSignIn = ( e ) => {
    e.preventDefault();
    userSession.redirectToSignIn( 'http://localhost:3000/newUser' );
  }

  const handleSignOut = ( e ) => {
    e.preventDefault();
    userSession.signUserOut( window.location.origin );
  }

  useEffect( () => {
    if ( userSession.isSignInPending() && !userSession.isUserSignedIn() ) {
      userSession.handlePendingSignIn().then( ( userData ) => {
            setData( userData );
        });
    }
    if ( userSession.isUserSignedIn() ) {
        setData( userSession.loadUserData() );
    }
  }, []);

  return (
    <div className = "App" >
      <Nav 
        session = { userSession }
        signIn = { handleSignIn } 
        signOut = { handleSignOut } 
      />
      <Route 
        path = '/newUser' 
        component = { () => <NewUserPage 
          signIn = { handleSignIn } 
          signOut = { handleSignOut } 
          session = { userSession }
          data = { data }
          history = { props }
          />
        }
      />
      <Route 
        exact path='/' 
        component = { Landing } 
        session = { userSession }
      />
      <Route 
        path='/topics' 
        component = { Topics } 
        session = { userSession }
      />
      <Route 
        path='/topic' 
        component = { TopicFeed } 
        session = { userSession }
      />
      <Route 
        path='/dashboard' 
        component = { Dashboard } 
        session = { userSession }
      />
      <Route 
        path='/post' 
        component = { SinglePost } 
        session = { userSession }
      />
    </div>
  );
}

export default App;


