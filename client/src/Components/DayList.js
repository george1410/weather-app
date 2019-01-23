import React from 'react';
import DayCard from './DayCard';

class DaysList extends React.Component {
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
        <DayCard></DayCard>
      </div>
    )
  }

}

export default DaysList;