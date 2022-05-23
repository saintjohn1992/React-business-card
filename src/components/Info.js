import {FaRegPaperPlane} from "react-icons/fa";


function Info() { 
    return (
<div className="app-container">
            <div className="info-container">
    <div className="shared-box">
    <header className="bkg-img"></header>
    
    <h2 className="name">Shane St. John</h2>

        <h4 className="profession">Frontend Developer</h4>
        
        <h4 className="portfolio-link">#</h4>

        <button className="email-button"><FaRegPaperPlane /> Email</button>
        
    <div className="about-section">
        <h2 className="about-title">About</h2>
            <p className="about">I am a Frontend developer with a passion for problem solving and
            coming up with solutions to make everyday tasks simpler / automated. I strive to 
            keep up with best practices, adapt, and I'm always looking out for new things to learn.
            </p>
    </div>

    <div className="interest-section">    
            <h2 className="interest-title">Interests</h2>
            <p className="interest">
                Food Expert. Music. Languages. Tech junkie. Coffee fanatic. Gym life. Reading. Internet
                fanatic. Swimmer. Runner.
            </p>
    </div>    
           
    </div>
    </div> 
 </div>
    )

   

}

export default Info;