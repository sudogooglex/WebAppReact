import React, { Component } from 'react';
import Tab from './Tab';

class TabDetail extends Component {
    render() {
        return (
            <div>
                {this.props.tabList.map((tabNumber, step) => {
                    return (
                        this.props.selected === tabNumber ? <Tab key = {tabNumber} name={tabNumber}/> : ''
                    );
                })}
            </div>
        );
    }
}

export default TabDetail;
