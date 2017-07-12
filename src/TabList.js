import React, { Component } from 'react';

class Pannel extends Component {
    render() {
        return (
            <div>
                {this.props.tabList.map((tabNumber, step) => {
                    return (
                        <div key={tabNumber} className='tabClass'>
                            <button className='selectTabButton' onClick={() => this.props.onTabClick(tabNumber)}>
                                {tabNumber}
                            </button>
                            <button className='closeTabButton' onClick={() => this.props.onCloseTabClick(tabNumber)}>
                                X
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Pannel;
