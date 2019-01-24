import React, {Component} from 'react';
import Icons from '../Icons'

class DayCard extends Component {
    render() {
        return (
            <div className="DayCard">
                <div>{this.props.day}</div>
                <div>
                    <img
                        src={this.getIcon()}
                        alt={this.props.weather}
                        title={this.props.weather}
                    />
                </div>
                <div>H: {this.getTempFormatted(this.props.temperatureHigh)}</div>
                <div>L: {this.getTempFormatted(this.props.temperatureLow)}</div>
            </div>
        )
    }

    getTempFormatted(temperature) {
        let temp = temperature;
        if (this.props.showFarenheit) {
            temp = Math.round((temp * (9/5)) + 32);
            return temp + '°F';
        } else {
            temp = Math.round(temp);
            return temp + '°C';
        }
    }

    getIcon() {
        switch (this.props.icon) {
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