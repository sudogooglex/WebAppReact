import React, { Component } from 'react';
import Tab from './Tab';

class TabDetail extends Component {
    render() {
        return (
            <div>
                <h3>Tab detail :</h3>
                <div>
                    {this.props.tabList.map((tabNumber, step) => {
                        return (
                            this.props.selected === tabNumber ? <Tab name={tabNumber}/> : ''
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TabDetail;
