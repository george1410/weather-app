import React, { Component } from 'react';
import Icons from '../Icons'
const {DateTime} = require('luxon');

class WeatherTable extends Component {
    state = {
        data: {},
        hasData: false
    }

    render() {
        if (!this.state.hasData) {
            return null;
        }

        return (
            <div className="details">
                <table className="centered">
                    <tbody>
                        {this.state.data.hourly.data.map(hour => (
                            <tr key={hour.time}>
                                <td>{DateTime.fromSeconds(hour.time).setZone(this.state.data.timezone).hour}:00</td>
                                <td>
                                    <img
                                        className="weatherIconTable"
                                        src={this.getIcon(hour.icon)}
                                        alt={this.props.weather}
                                        title={this.props.weather}
                                    />
                                </td>
                                <td>{hour.summary}</td>
                                <td>{this.getTempFormatted(hour.temperature)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.selectedDay !== prevProps.selectedDay) {
                fetch(`/api/weather/hourly?lat=${this.props.latitude}&long=${this.props.longitude}&time=${this.props.selectedDay}`)
                    .then(response => response.json())
                    .then(json => {
                        this.setState({
                            data: json,
                            hasData: true
                        });
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
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

    getIcon(icon) {
        switch (icon) {
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

export default WeatherTable;