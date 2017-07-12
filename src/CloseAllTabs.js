import React, { Component } from 'react';

class CloseAllTabs extends Component {
    render() {
        return (
            <div>
                <button className='closeAllTabsButton' onClick={() => this.props.onCloseAllTabsClick()}>
                    Close All Tabs
                </button>
            </div>
        );
    }
}

export default CloseAllTabs;
