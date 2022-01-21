import { useState } from "react";

const Destination = ({ data }) => {

    const [ destinations, setDestinations ] = useState(data.destinations[0]);
console.log(data.destinations[0]);
    return ( 
        <section className="destination-container">
            <div className="destination-container_left">
                <h2 className="destination-container_left__title"><span>01</span>PICK YOUR DESTINATION</h2>
                <img src={ destinations.images.png } alt="Moon" />
            </div>

            <div className="destination-container_right">
                <section className="destination-container_right__buttons">
                    {data.destinations.map((dest, index) => (
                        <button key={ index } onClick={() => setDestinations(dest)} className="destination_btn">{ dest.name }</button>
                        ))}
                </section>
            </div>
        </section>
     );
}
 
export default Destination;