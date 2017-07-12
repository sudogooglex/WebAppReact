import React, { Component } from 'react';

class Pannel extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.tabList.map((tabNumber, step) => {
                        return (
                            <div key={tabNumber} className='tabClass'>
                                <button className='selectTabButyon' onClick={() => this.props.onTabClick(tabNumber)}>
                                    {tabNumber}
                                </button>
                                <button className='closeTabButton' onClick={() => this.props.onCloseTabClick(tabNumber)}>
                                    X
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Pannel;
