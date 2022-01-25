import { useState } from "react";

const Destination = ({ data }) => {

    const [ destinations, setDestinations ] = useState(data.destinations[0]);
    const [ activeButton, setActiveButton ] = useState(data.destinations[0].name);

    const handleChange = (dest) => {
        setDestinations(dest)
        setActiveButton(dest.name);
    }

    return ( 
        <section className="destination-container">
            <div className="destination-container_left">
                <h2 className="destination-container_left__title subtitle"><span>01</span>PICK YOUR DESTINATION</h2>
                <img className="destination-container_left__img" src={ destinations.images.png } alt="Destination" />
            </div>

            <div className="destination-container_right">
                <section className="destination-container_right__buttons">
                    {data.destinations.map((dest, index) => (
                        <button key={ index } onClick={() => handleChange(dest)} className={activeButton === dest.name ? 'destination_btn active-button' : 'destination_btn'}>{ dest.name.toUpperCase() }</button>
                        ))}
                </section>
                <section className="destination-container_right__info">
                    <h1 className="title">{ destinations.name.toUpperCase() }</h1>
                    <p className="text">{ destinations.description }</p>
                    <div className="separator-dash"></div>
                    <div className="data">
                        <div className="data_distance">
                            <h3 className="data_distance__title">AVG. DISTANCE</h3>
                            <p className="data_distance__number number">{ destinations.distance.toUpperCase() }</p>
                        </div>
                        <div className="data_travel">
                            <h3 className="data_travel__title">EST. TRAVEL TIME</h3>
                            <p className="data_travel__number number">{ destinations.travel.toUpperCase() }</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
     );
}
 
export default Destination;