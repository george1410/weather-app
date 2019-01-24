import React, {Component} from 'react';
import DayCard from './DayCard';

class DaysList extends Component {
  render() {
    const { hasError, isLoading } = this.props;
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    if (isLoading) {
      return (
        <div>Loading...</div>
      )
    }

    if (hasError) {
      return (
        <div>An error occured getting weather data.</div>
      )
    }

    return (
      <div className="DayList">
        {
          this.props.data.daily.data.map(day => (
            <DayCard
              key = {day.time}
              day = {daysOfWeek[(new Date(day.time * 1000)).getDay()]}
              icon = {day.icon}
              weather = {day.summary}
              temperatureHigh = {day.temperatureHigh}
              temperatureLow = {day.temperatureLow}
              showFarenheit = {this.props.showFarenheit}
            />
          ))
        }
      </div>
    )
  }

}

export default DaysList;