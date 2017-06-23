import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Sources from './Sources.js'

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
            <div id="settingsDrawer">
                <Drawer
                    docked={ false }
                    width={ this.props.width }
                    open={ this.state.open }
                    onRequestChange={ this.onRequestChange }
                >
                    <MenuItem
                        onTouchTap={ () => {
                            this.refs.sourcesCard.show() 
                            this.setState({ open: false })
                        }}
                    >
                        Sources
                    </MenuItem>
                </Drawer>
                <Sources ref="sourcesCard" />
            </div>
        )
    }
}

SettingsDrawer.propTypes = {
    width: PropTypes.number
}

SettingsDrawer.defaultProps = {
    width: 200
}