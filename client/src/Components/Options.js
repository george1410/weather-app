import React, {Component} from 'react';

class Options extends Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmitForm(this.state.latitude, this.state.longitude);
    }

    handleLatChange(event) {
        this.setState({latitude: event.target.value});
    }

    handleLongChange(event) {
        this.setState({longitude: event.target.value});
    }

    render() {
        return (
            <>
                <div>
                    <input
                        type="checkbox"
                        id="showFarenheit"
                        onChange={this.props.onChangeCheckbox} />
                    <label htmlFor="showFarenheit">Display in Farenheit</label>
                </div>

                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label htmlFor="latInput">Latitude: </label>
                        <input
                            type="text"
                            id="latInput"
                            onChange={this.handleLatChange.bind(this)}/>
                        <label htmlFor="longInput">Longitude: </label>
                        <input
                            type="text"
                            id="longInput"
                            onChange={this.handleLongChange.bind(this)}/>
                        <input type="submit" value="Update"/>
                    </form>
                </div>
            </>
        );
    }
}

export default Options;