import React, { Component } from 'react';
import TabList from './TabList';
import TabDetail from './TabDetail';
import AddTab from './AddTab';
import CloseAllTabs from './CloseAllTabs';

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
    }

    onTabClick(tabNumber) {
        this.setState({
            selected: tabNumber
        });
    }

    onAddTabClick() {
        var tabListFromState = this.state.tabList;
        tabListFromState.push(tabListFromState.length + 1);
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
                <TabList tabList={this.state.tabList} onTabClick={this.onTabClick}/>
                <AddTab onAddTabClick={this.onAddTabClick}/>
                <CloseAllTabs onCloseAllTabsClick={this.onCloseAllTabs}/>
                <TabDetail selected={this.state.selected} tabList={this.state.tabList}/>
            </div>
);
    }
}

export default Pannel;