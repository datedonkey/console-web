import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import GoogleAuthButton from './Components/GoogleAuthButton.js'

function onAuthSuccess(payload) {
  console.log("success: " + JSON.stringify(payload))
};

function onAuthFailure(payload) {
  console.log("failure: " + payload)
}

export default class App extends React.Component {
  render() {
      return (
        <AppBar
          title={<span>DateDonkey</span>}
          iconElementRight={<GoogleAuthButton 
            clientId="811522414771-s8nnkmrgh2sfa9i36oopc7meklt3548r.apps.googleusercontent.com"
            onSuccess={ onAuthSuccess }
            onFailure={ onAuthFailure }
          />}
        />
      );
   }
}
