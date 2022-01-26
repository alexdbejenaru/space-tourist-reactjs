import { useState } from "react";

const Crew = ({ crewData }) => {
    const [ crewMember, setCrewMember ] = useState(crewData[0]);
    const [ changeMember, setChangeMember ] = useState(false);

    const handleCrewClick = (index) => {
        setCrewMember(crewData[index]);
        setChangeMember(true);
        setTimeout(() => {
            setChangeMember(false);
        }, 200)
    }

    return ( 
        <section className="crew-container">
            <div className="crew-container_left">
                <h2 className="destination-container_left__title crew-container_left__title subtitle"><span>02</span>MEET YOUR CREW</h2>
                    <div className={changeMember ? "crew-members crew-members_hidden" : 'crew-members crew-members_shown'}>
                            <div key={crewMember.name} className="crew_info">
                                <h2 className="crew_info__role">{ crewMember.role }</h2>
                                <h1 className="crew_info__name">{ crewMember.name }</h1>
                                <p className="crew_info__text">{ crewMember.bio }</p>
                            </div>
                            <div className="crew_image">
                                <img src={ crewMember.images.png } alt="" className="crew_image__img" />
                            </div>
                    </div>
                <div className="button-container">
                    {crewData.map((member, index) => (
                            <div key={ index } onClick={() => handleCrewClick(index)} className={crewMember.name === member.name ? 'active crew-button' : 'crew-button'}>  
                            </div> 
                    ))} 
                </div>
            </div>
        </section>
     );
}
 
export default Crew;