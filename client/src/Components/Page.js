import React, { Component } from 'react';
import Header from './Header';
import DayList from './DayList';
import Options from './Options';

class Page extends Component {
    state = {
        showFarenheit: false,
        latitude: '',
        longitude: '',
        location: '',
        isLoading: true,
        hasError: false,
        data: {},
        isLocationSet: false
    }

    handleChangeCheckbox = () => {
        this.setState(currentState => ({
            showFarenheit: !currentState.showFarenheit
        }));
    }

    handleLocationSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isLocationSet: true,
            isLoading: true,
            hasError: false
        });
        let q = encodeURI(this.state.location);
        fetch(`/api/location?q=${q}`)
            .then(response => response.json())
            .then(json => {
                if(json.total_results > 0) {
                    let lat = json.results[0].geometry.lat;
                    let long = json.results[0].geometry.lng;
                    if (lat !== this.state.latitude || long !== this.state.longitude) {
                        this.setState({
                            latitude: lat,
                            longitude: long,
                            formattedLocation: json.results[0].formatted,
                            location: json.results[0].formatted
                        })
                    } else {
                        this.setState({
                            isLoading: false,
                            formattedLocation: json.results[0].formatted,
                            location: json.results[0].formatted
                        })
                    }
                } else {
                    this.setState({
                        hasError: true,
                        isLoading: false
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
                    hasError={this.state.hasError} 
                    location={this.state.location} 
                    formattedLocation={this.state.formattedLocation} 
                    isLocationSet={this.state.isLocationSet} />
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
                        data={this.state.data} 
                        isLocationSet={this.state.isLocationSet} />
                </div>
            </>
        );
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