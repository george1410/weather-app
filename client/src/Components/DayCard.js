import React, {Component} from 'react';

class DayCard extends Component {
    render() {
        return (
            <div className="DayCard">
                <div>Day</div>
                <div>Weather</div>
                <div>Temp°C</div>
            </div>
        )
    }
}

export default DayCard;