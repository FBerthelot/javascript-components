import React from "react";
import {DisplayAction} from "./DisplayAction";

class ContextualMenu extends React.Component {

    open(e) {
        this.ctx.onContextMenu(this.ctx,e);
    }

    render() {
        return <DisplayAction actionKey={this.props.actionKey} context={this.props.context} render={({context}) => {
            this.ctx = context;
            return false;
        }}/>
    }
}

export {ContextualMenu}