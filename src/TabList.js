import React, { Component } from 'react';

class Pannel extends Component {
    render() {
        return (
            <div>
                <h3>Tab detail :</h3>
                <div>
                    {this.props.tabList.map((tabNumber, step) => {
                        return (
                            <button className='tabButton' key={tabNumber} onClick={() => this.props.onTabClick(tabNumber)}>
                                {tabNumber}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Pannel;
