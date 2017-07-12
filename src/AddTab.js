import React, { Component } from 'react';

class AddTab extends Component {
    render() {
        return (
            <div>
                <button className='addtabButton' onClick={() => this.props.onAddTabClick()}>
                    Add a tab
                </button>
            </div>
        );
    }
}

export default AddTab;
