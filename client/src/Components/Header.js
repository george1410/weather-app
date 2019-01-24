import React, { Component } from 'react';

class Header extends Component {
    render() {
        let summary = <p>An error occured getting weather data.</p>
        if (!this.props.isLoading && !this.props.hasError ) {
            summary = <p>{this.props.data.daily.summary}</p>
        }

        if (!this.props.isLocationSet) {
            return (
                <header>
                    <h1>George's Weather App</h1>
                    <hr />
                </header>
            )
        }

        return (
            <header>
                <h1>George's Weather App</h1>
                {this.props.hasError ? '' : <h3>{this.props.formattedLocation}</h3>}
                {this.props.isLoading ? <p>Loading...</p> : summary}
                <hr />
            </header>
        )
    }
}

export default Header;