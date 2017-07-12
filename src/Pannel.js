import React, { Component } from 'react';
import TabList from './TabList';
import TabDetail from './TabDetail';

class Pannel extends Component {
    constructor() {
        super();
        this.state = {
            selected: 1,
            tabList: [1, 2, 3]
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(tabNumber) {
        this.setState({
            selected: tabNumber
        });
    }

    render() {
        console.log(this.state.selected)
        return (
            <div>
                <TabList tabList={this.state.tabList} onClick={this.onClick}/>
                <TabDetail selected={this.state.selected} tabList={this.state.tabList}/>
            </div>
);
    }
}

export default Pannel;