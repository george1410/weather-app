import React, {Component} from 'react';
import WeatherTable from './WeatherTable';
import DayList from './DayList';

class WeatherArea extends Component {

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
                    selectedDay={this.props.selectedDay} 
                    onSelectedDayChange={this.props.onSelectedDayChange} />
                <WeatherTable 
                    selectedDay={this.props.selectedDay} 
                    latitude={this.props.latitude}
                    longitude={this.props.longitude} 
                    showFarenheit={this.props.showFarenheit} 
                    isLoading={this.props.isLoading} />
            </>
        )
    }
}

export default WeatherArea;