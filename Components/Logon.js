import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome';

const responseGoogle = (response) => {
  console.log(response);
}

export default class Logon extends React.Component {
   render() {
      return (
        <GoogleLogin
          clientId='811522414771-s8nnkmrgh2sfa9i36oopc7meklt3548r.apps.googleusercontent.com'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        >
          <FontAwesome name='google' />
          <span> Login with Google</span>
        </GoogleLogin>
      );
   }
}