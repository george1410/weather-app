import React, { Component } from 'react';

class Header extends Component {
    render() {

        return (
            <header>
                {this.props.hasError || !this.props.isLocationSet ? <h1>Weather</h1> : <h1>{this.props.formattedLocation}</h1>}
                <hr />
            </header>
        )
    }
}

export default Header;