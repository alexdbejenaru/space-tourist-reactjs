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
                    <h1 className="title">{destinations.name}</h1>
                    <p className="text">{ destinations.description }</p>
                    <div className="separator-dash"></div>
                    <div className="data">
                        <div className="data_distance">
                            <h3 className="data_distance__title">AVG. DISTANCE</h3>
                            <p className="data_distance__number">{ destinations.distance }</p>
                        </div>
                        <div className="data_travel">
                            <h3 className="data_travel__title">EST. TRAVEL TIME</h3>
                            <p className="data_travel__number">{ destinations.travel }</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
     );
}
 
export default Destination;