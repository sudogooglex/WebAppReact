import React, { Component } from 'react';
import './List.css';

class Pannel extends Component {
    render() {
        return (
            <div>
                {this.props.tabList.length === 0 ? <div className='emptyBloc'/> : ''}
                {this.props.tabList.map((tabNumber, step) => {
                    return (
                        <div key={tabNumber} className='selectCloseTab'>
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
