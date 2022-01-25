const Crew = ({ crewData }) => {

    return ( 
        <section className="crew-container">
            <div className="crew-container_left">
                <h2 className="destination-container_left__title subtitle"><span>02</span>MEET YOUR CREW</h2>
                <div className="crew-members">
                    {crewData.map((member, index) => (
                        <section key={ index } className="crew">
                            <div className="crew_info">
                                <h3 className="title">{ member.role }</h3>
                                <h2 className="name">{ member.name }</h2>
                                <p className="text">{ member.bio }</p>
                            </div>
                            <div className="crew_image">
                                <img src={ member.images.png } alt="" />
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Crew;