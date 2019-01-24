import React, {Component} from 'react';
import DayCard from './DayCard';
const {DateTime} = require('luxon');

class DaysList extends Component {
  render() {
    const { hasError, isLoading, isLocationSet } = this.props;

    if (!isLocationSet) {
      return null;
    }

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
              day = {DateTime.fromSeconds(day.time).setZone(this.props.data.timezone).weekdayShort}
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