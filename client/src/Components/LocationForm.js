import React, {Component} from 'react';

class LocationForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onLocationSubmit}>
                    <div className="row">
                        <div className="nine columns">
                            <label htmlFor="locationInput">Location</label>
                            <input
                                className="u-full-width"
                                autoComplete="off"
                                type="text"
                                id="locationInput"
                                placeholder="Location"
                                value={this.props.location}
                                onChange={this.props.onLocationChange}/>
                        </div>

                        <div className="three columns">
                            <label>&nbsp;</label>
                            <input className="button-primary u-full-width" type="submit" value="Change Location"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LocationForm;