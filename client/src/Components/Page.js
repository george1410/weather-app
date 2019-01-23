import React, {Component} from 'react';
import Header from './Header';
import DayList from './DayList'

class Page extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <div className="Content">
                    <DayList></DayList>
                </div>
            </>
        );
    }
}

export default Page;