import { useState } from "react";

const Destination = ({ data }) => {

    const [ destinations, setDestinations ] = useState(data.destinations[0]);
console.log(data.destinations[0]);
    return ( 
        <section className="destination-container">
            <div className="destination-container_left">
                <h2 className="destination-container_left__title"><span>01</span>PICK YOUR DESTINATION</h2>
                <img src={ destinations.images.png } alt="Destination" />
            </div>

            <div className="destination-container_right">
                <section className="destination-container_right__buttons">
                    {data.destinations.map((dest, index) => (
                        <button key={ index } onClick={() => setDestinations(dest)} className="destination_btn">{ dest.name }</button>
                        ))}
                </section>
                <section className="destination-container_right__info">
                    <h1 className="destination-container_right__info___title">{destinations.name}</h1>
                    <p className="destination-container_right__info__text">{ destinations.description }</p>
                    <div className="separator-dash"></div>
                    <div className="destination-container_right__info___data">
                        <div className="distance">
                            <h3 className="distance_title">AVG. DISTANCE</h3>
                            <p className="distance_number">{ destinations.distance }</p>
                        </div>
                        <div className="travel">
                            <h3 className="travel_title">EST. TRAVEL TIME</h3>
                            <p className="travel_number">{ destinations.travel }</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
     );
}
 
export default Destination;