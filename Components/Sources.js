import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import GoogleAuthButton from './GoogleAuthButton.js'

export default class Sources extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
        this.onGoogleSourceAddSuccess = this.onGoogleSourceAddSuccess.bind(this)
        this.onGoogleSourceAddFailure = this.onGoogleSourceAddFailure.bind(this)
    }

    show() {
        this.setState({ visible: true })
    }

    onGoogleSourceAddSuccess(payload) {
        fetch("https://api.datedonkey.com/user/" + this.props.userId + "/setOfflineKey", {
            method: "PUT",
            body: JSON.stringify({ "googleIdOfflineKey": payload.code }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => { return response.json() })
            .then(responseValue => {
                console.log(responseValue)
            })
    }

    onGoogleSourceAddFailure(payload) {
        alert(payload.errorMessage)
    }

    render() {
        return (
            this.state.visible ?
                <Card>
                    <CardTitle
                        title="Sources"
                    />
                    <CardText>
                        You can add different calendar sources here.
                    </CardText>
                    <CardText>
                        <GoogleAuthButton
                            clientId="811522414771-s8nnkmrgh2sfa9i36oopc7meklt3548r.apps.googleusercontent.com"
                            buttonText="Google Calendars"
                            secondary={ true }
                            offline={ true }
                            scope={ "https://www.googleapis.com/auth/calendar.readonly" }
                            onSuccess={ this.onGoogleSourceAddSuccess }
                            onFailure={ this.onGoogleSourceAddFailure }
                        />
                    </CardText>
                    <Divider/>
                    <CardText>
                        <RaisedButton
                            label="Close"
                            primary={true}
                            onTouchTap={() => this.setState({visible:false})}/>
                    </CardText>
                </Card>
            : null
        )
    }
}

Sources.propTypes = {
    userId: PropTypes.string
}

Sources.defaultProps = {
    userId: null
}