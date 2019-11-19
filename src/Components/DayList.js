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
      <div className="row">
        <div className="DayList ten columns centered">
          {
            this.props.data.daily.data.map(day => (
              <DayCard
                key = {day.time}
                day = {DateTime.fromSeconds(day.time).setZone(this.props.data.timezone).weekdayShort}
                icon = {day.icon}
                weather = {day.summary}
                time = {day.time}
                temperatureHigh = {day.temperatureHigh}
                temperatureLow = {day.temperatureLow}
                showFarenheit = {this.props.showFarenheit}
                onSelectedDayChange = {() => this.props.onSelectedDayChange(day.time)}
                selectedDay={this.props.selectedDay}
              />
            ))
          }
        </div>
      </div>
    )
  }

}

export default DaysList;