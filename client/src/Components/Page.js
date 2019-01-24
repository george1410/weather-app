import React, { Component } from 'react';
import Header from './Header';
import DayList from './DayList';
import Options from './Options';

class Page extends Component {
    state = {
        showFarenheit: false,
        latitude: '51.4462',
        longitude: '-0.2169',
        location: '',
        isLoading: true,
        hasError: false,
        data: {}
    }

    handleChangeCheckbox = () => {
        this.setState(currentState => ({
            showFarenheit: !currentState.showFarenheit
        }));
    }

    handleLocationSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isLoading: true
        });
        let q = encodeURI(this.state.location);
        fetch(`/api/location?q=${q}`)
            .then(response => response.json())
            .then(json => {
                if(json.total_results > 0) {
                    let lat = json.results[0].geometry.lat;
                    let long = json.results[0].geometry.lng;
                    this.setState({
                        latitude: lat,
                        longitude: long,
                        isLoading: false
                    })
                } else {
                    this.setState({
                        isLoading: false,
                        hasError: true
                    })
                }
            })
            .catch((e) => {
                console.log(e);
                this.setState({
                    isLoading: false,
                    hasError: true
                })
            })
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    render() {
        return (
            <>
                <Header
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    data={this.state.data}
                    isLoading={this.state.isLoading} 
                    hasError={this.state.hasError} />
                <Options
                    onChangeCheckbox={this.handleChangeCheckbox}
                    onLocationSubmit={this.handleLocationSubmit}
                    onLocationChange={this.handleLocationChange}
                    location={this.state.location} />
                <div className="Content">
                    <DayList showFarenheit={this.state.showFarenheit}
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        isLoading={this.state.isLoading}
                        hasError={this.state.hasError}
                        data={this.state.data} />
                </div>
            </>
        );
    }

    componentDidMount() {
        this.getDailyWeatherData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.latitude !== prevState.latitude || this.state.longitude !== prevState.longitude) {
            this.getDailyWeatherData();
        }
    }

    getDailyWeatherData() {
        fetch(`/api/weather/daily?lat=${this.state.latitude}&long=${this.state.longitude}`)
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
                });
    }
}

export default Page;