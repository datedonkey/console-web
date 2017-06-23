import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class SettingsDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.onRequestChange = this.onRequestChange.bind(this)
    }

    onRequestChange(drawerOpen) {
        this.setState({ open: !this.state.open })
    }

    open() {
        this.setState({ open: true })
    }

    render() {
        return(
            <Drawer
                docked={ false }
                width={ this.props.width }
                open={ this.state.open }
                onRequestChange={ this.onRequestChange }
            >
                <MenuItem>Sources</MenuItem>
            </Drawer>
        )
    }
}

SettingsDrawer.propTypes = {
    width: PropTypes.number
}

SettingsDrawer.defaultProps = {
    width: 200
}