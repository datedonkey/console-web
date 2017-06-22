import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Chip from 'material-ui/Chip';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import GoogleAuthButton from './Components/GoogleAuthButton.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showLoggedIn: null, drawerOpen: false }
    this.onAuthSuccess = this.onAuthSuccess.bind(this)
    this.onAuthFailure = this.onAuthFailure.bind(this)
    this.onLogoutClicked = this.onLogoutClicked.bind(this)
    this.onDrawerClicked = this.onDrawerClicked.bind(this)
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

  onDrawerClicked() {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    return (
      <div id="app">
      <AppBar
        title={<span>DateDonkey</span>}
        onLeftIconButtonTouchTap={ this.onDrawerClicked }
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
      <Drawer
        docked={ false }
        width={ 200 }
        open={ this.state.drawerOpen }
        onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
      >
        <MenuItem>Settings</MenuItem>
      </Drawer>
      </div>
    );
  }
}
