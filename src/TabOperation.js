import React, { Component } from 'react';

class TabOperation extends Component {
    render() {
        return (
            <div className = 'tabOperation'>
                <button onClick={() => this.props.onAddTabClick()}>
                    Add a tab
                </button>
                <button onClick={() => this.props.onCloseAllTabsClick()}>
                    Close All Tabs
                </button>
            </div>
        );
    }
}

export default TabOperation;
