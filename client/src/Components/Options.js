import React, {Component} from 'react';
import LocationForm from './LocationForm';

class Options extends Component {
    render() {
        return (
            <>
                <LocationForm
                    onLocationSubmit={this.props.onLocationSubmit}
                    onLocationChange={this.props.onLocationChange}
                    location={this.props.location} />

                <div>
                    <label>
                        <input
                            type="checkbox"
                            id="showFarenheit"
                            onChange={this.props.onChangeCheckbox} />
                        <span className="label-body">Display in Farenheit</span>
                    </label>
                </div>
            </>
        );
    }
}

export default Options;