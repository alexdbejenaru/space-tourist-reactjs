import { useState } from "react";

const Crew = ({ crewData }) => {
    const [ crewMember, setCrewMember ] = useState(crewData[0]);
console.log(crewMember);

    const handleCrewClick = (index) => {
        setCrewMember(crewData[index]);
    }

    return ( 
        <section className="crew-container">
            <div className="crew-container_left">
                <h2 className="destination-container_left__title subtitle"><span>02</span>MEET YOUR CREW</h2>
                <div className="crew-members">
                    {crewData.map((member, index) => (
                            <div key={ index } onClick={() => handleCrewClick(index)} className={crewMember.name === member.name ? 'active crew-button' : 'crew-button'}>  
                            </div> 
                    ))} 
                    <h1>{ crewMember.name }</h1>
                </div>
            </div>
        </section>
     );
}
 
export default Crew;