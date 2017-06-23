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
    }

    show() {
        this.setState({ visible: true})
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