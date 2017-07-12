import React, { Component } from 'react';

class Tab extends Component {
    render() {
        return (
            <div>
                <h2>Tab description :</h2>
                {this.props.name}
            </div>
        );
    }
}

export default Tab;