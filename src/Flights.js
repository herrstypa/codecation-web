import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { takeOff } from 'react-icons-kit/entypo/takeOff';
import { landing } from 'react-icons-kit/entypo/landing';
import { threeHorizontal } from 'react-icons-kit/entypo/threeHorizontal';

/*
    Flygresa D83656 - 2018 okt 02

    Departure   08:55 Köpenhamn (CPH) Terminal 2
    Arrival     11:45 Barcelona (BCN) Terminal 2

    Flygresa D83657 - 2018 okt 09

    Departure  12:30 Barcelona (BCN) Terminal 2
    Arrival    15:30 Köpenhamn (CPH) Terminal 3

    Hand Luggage x 1, Max 10 kg, Max 55 x 40 x 23 cm
*/

const Connection = () => <div className="flight-connection">
    <Icon icon={threeHorizontal} size={40} />
    <Icon icon={threeHorizontal} size={40} style={{ margin: 1 }} />
    <Icon icon={threeHorizontal} size={40} />
</div>

const FlightDetails = ({ icon, time, location }) => <div className="flight-details">
    <div style={{ color: "#f99463" }}>
        <Icon size={75} icon={icon} />
    </div>
    <div className="time"> {time}</div>
    <div> {location} </div>
</div>

const FlightInfo = ({ title, date, from, to }) => <div className="flight-info-container">
    <div className="flight-type"> {title} </div>
    <div className="flight-date"> {date} </div>
    <div className="flight-info">
        <FlightDetails icon={takeOff} {...from} />
        <Connection />
        <FlightDetails icon={landing} {...to} />
    </div>
</div>

class Flights extends Component {
    render() {
        return (
            <section className="flights">
                <div className="title">
                    .Flights
                </div>
                <div className="details">
                    <FlightInfo
                        title="Departure"
                        date="2018-10-02"
                        from={{
                            location: "Copenhagen Airport (CPH)",
                            time: "08:55"
                        }}
                        to={{
                            location: "Barcelona Airport (BCN)",
                            time: "11:45"
                        }}
                    />
                    <FlightInfo
                        title="Return"
                        date="2018-10-09"
                        from={{
                            location: "Barcelona Airport (BCN)",
                            time: "12:30"
                        }}
                        to={{
                            location: "Copenhagen Airport (CPH)",
                            time: "15:30"
                        }}
                    />
                </div>
            </section>
        );
    }
}

export default Flights;
/*
<p> Flygresa D83656 - 2018 okt 02 </p>
                    <p>Departure   08:55 Köpenhamn (CPH) Terminal 2 </p>
                    <p> Arrival     11:45 Barcelona (BCN) Terminal 2 </p>

                    <p>Flygresa D83657 - 2018 okt 09 </p>

                    <p>Departure  12:30 Barcelona (BCN) Terminal 2 </p>
                    <p> Arrival    15:30 Köpenhamn (CPH) Terminal 3 </p>

                    <p> Hand Luggage x 1, Max 10 kg, Max 55 x 40 x 23 cm </p>
*/