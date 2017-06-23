import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Chip from 'material-ui/Chip';
import SettingsDrawer from './Components/SettingsDrawer.js';
import GoogleAuthButton from './Components/GoogleAuthButton.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showLoggedIn: null }
    this.onAuthSuccess = this.onAuthSuccess.bind(this)
    this.onAuthFailure = this.onAuthFailure.bind(this)
    this.onLogoutClicked = this.onLogoutClicked.bind(this)
    this.onHamburgerClicked = this.onHamburgerClicked.bind(this)
  }

  onAuthSuccess(payload) {
    fetch("https://api.datedonkey.com/user/byExternalId/" + payload.profileObj.googleId)
      .then(response => { return response.json() })
      .then(responseValue => {
        this.setState({ showLoggedIn: responseValue.name })
      })
  };

  onAuthFailure(payload) {
    console.log("failure: " + payload)
  }

  onLogoutClicked() {
    this.setState({ showLoggedIn: null })
  }

  onHamburgerClicked() {
    this.refs.settingsDrawer.open()
  }

  render() {
    return (
      <div id="app">
        <AppBar
          title={<span>DateDonkey</span>}
          onLeftIconButtonTouchTap={ this.onHamburgerClicked }
          iconElementRight={
            <div id="RightSideAppBar">
            { this.state.showLoggedIn == null ? 
              <GoogleAuthButton 
              clientId="811522414771-s8nnkmrgh2sfa9i36oopc7meklt3548r.apps.googleusercontent.com"
              onSuccess={ this.onAuthSuccess }
              onFailure={ this.onAuthFailure }/> :
              <Chip
              onRequestDelete={ this.onLogoutClicked }>
              { this.state.showLoggedIn }</Chip> 
            }
          </div>}
        />
        <SettingsDrawer 
          ref="settingsDrawer" />
      </div>
    );
  }
}
