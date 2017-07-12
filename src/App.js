import React, { Component } from 'react';
import './App.css';
import TabList from './List/TabList';
import TabDetail from './Detail/TabDetail';
import TabOperation from './Operation/TabOperation';

class Pannel extends Component {
    constructor() {
        super();
        this.state = {
            selected: 1,
            tabList: [1, 2, 3]
        };
        this.onTabClick = this.onTabClick.bind(this);
        this.onAddTabClick = this.onAddTabClick.bind(this);
        this.onCloseAllTabs = this.onCloseAllTabs.bind(this);
        this.onCloseTabClick = this.onCloseTabClick.bind(this);
    }

    onTabClick(tabNumber) {
        this.setState({
            selected: tabNumber
        });
    }

    onCloseTabClick(tabNumber) {
        var tabListFromState = this.state.tabList;
        var index = tabListFromState.indexOf(tabNumber);
        if (index > -1) {
            tabListFromState.splice(index, 1);
        }
        var selectedTab = tabListFromState.length === 0 ? 0 : tabListFromState[0];
        this.setState({
            selected: selectedTab,
            tabList: tabListFromState
        });
    }

    onAddTabClick() {
        var tabListFromState = this.state.tabList;
        var newTabNum = tabListFromState.length === 0 ? 1 : Math.max.apply(null, tabListFromState) + 1;
        tabListFromState.push(newTabNum);
        this.setState({
            tabList: tabListFromState
        });
    }

    onCloseAllTabs() {
        this.setState({
            selected: 1,
            tabList: []
        });
    }

    render() {
        return (
            <div>
                <TabList tabList={this.state.tabList} onTabClick={this.onTabClick} onCloseTabClick={this.onCloseTabClick}/>
                <TabOperation onCloseAllTabsClick={this.onCloseAllTabs} onAddTabClick={this.onAddTabClick}/>
                <TabDetail selected={this.state.selected} tabList={this.state.tabList}/>
            </div>
);
    }
}

export default Pannel;