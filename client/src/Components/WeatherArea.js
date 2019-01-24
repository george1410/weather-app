import React, {Component} from 'react';
import WeatherTable from './WeatherTable';
import DayList from './DayList';

class WeatherArea extends Component {
    state = {
        selectedDay: null
    }

    handleSelectedDayChange = (time) => {
        this.setState({
            selectedDay: time
        })
    }

    render() {
        return (
            <>
                <DayList 
                    showFarenheit={this.props.showFarenheit}
                    latitude={this.props.latitude}
                    longitude={this.props.longitude}
                    isLoading={this.props.isLoading}
                    hasError={this.props.hasError}
                    data={this.props.data} 
                    isLocationSet={this.props.isLocationSet} 
                    selectedDay={this.state.selectedDay} 
                    onSelectedDayChange={this.handleSelectedDayChange} />
                <WeatherTable 
                    selectedDay={this.state.selectedDay} 
                    latitude={this.props.latitude}
                    longitude={this.props.longitude} 
                    showFarenheit={this.props.showFarenheit} />
            </>
        )
    }
}

export default WeatherArea;