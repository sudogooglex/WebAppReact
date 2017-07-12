import React, { Component } from 'react';
import './Operation.css';

class TabOperation extends Component {
    render() {
        return (
            <div className = 'tabOperation'>
                <button className='buttonOperation' onClick={() => this.props.onAddTabClick()}>
                    Add a tab
                </button>
                <button className='buttonOperation' onClick={() => this.props.onCloseAllTabsClick()}>
                    Close All Tabs
                </button>
            </div>
        );
    }
}

export default TabOperation;
