import React, {Component} from 'react';
import Icons from '../Icons'

class DayCard extends Component {
    render() {
        return (
            <div className="DayCard">
                <div>{this.props.day}</div>
                <div>
                    <img
                        src={this.getIcon(this.props.icon)}
                        alt={this.props.weather}
                        title={this.props.weather}
                    />
                </div>
                <div>H: {Math.round(this.props.temperatureHigh)}°C</div>
                <div>L: {Math.round(this.props.temperatureLow)}°C</div>
            </div>
        )
    }

    getIcon(name) {
        switch (name) {
            case 'clear-day':
                return Icons.clearday;
            case 'clear-night':
                return Icons.clearnight;
            case 'cloudy':
                return Icons.cloudy;
            case 'fog':
                return Icons.fog;
            case 'partly-cloudy-day':
                return Icons.partlycloudyday;
            case 'partly-cloudy-night':
                return Icons.partlycloudynight;
            case 'rain':
                return Icons.rain;
            case 'sleet':
                return Icons.sleet;
            case 'snow':
                return Icons.snow;
            case 'wind':
                return Icons.wind;
            default:
                break;
        }
    }
}

export default DayCard;