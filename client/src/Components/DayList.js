import React, {Component} from 'react';
import DayCard from './DayCard';

class DaysList extends Component {
  state = {
    isLoading: true,
    hasError: false,
    data: []
  }

  componentDidMount() {
    fetch('/api/daily')
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
          isLoading: false
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          isLoading: false,
          hasError: true
        });
      })
  }


  render() {
    const { hasError, isLoading } = this.state;
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
          this.state.data.daily.data.map(day => (
            <DayCard
              key = {day.time}
              day = {daysOfWeek[(new Date(day.time * 1000)).getDay()]}
              icon = {day.icon}
              weather = {day.summary}
              temperatureHigh = {day.temperatureHigh}
              temperatureLow = {day.temperatureLow}
            />
          ))
        }
      </div>
    )
  }

}

export default DaysList;