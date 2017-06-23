import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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