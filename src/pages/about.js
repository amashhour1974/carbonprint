import React, { useEffect } from 'react';
import baseUrl from '../database-secrets/secrets.js';
import { Container, } from '@material-ui/core';
import linked_icon from '../images/icons/linkedin.png';
import about_us_image from '../images/about-us-hero.jpg'
import who_we_are from '../images/who-we-are.jpg';
import our_values from '../images/our-values.jpg';
import github_image from '../images/github.png'
import stackoverflow_image from '../images/stack-overflow.png'

const About = () => {

    /* global variables */
    const teamUrl = baseUrl + "/team"

    /* Fetch Team Data */
    function getTeam() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(teamUrl, { headers })
            .then(response => response.json())
            .then(data => {
                let result
                data.forEach(element => {
                    result = element.result
                });
                result.forEach(element => {
                    /* Set Team Info */
                    if (element.designation_type_id === 1) {
                        setTeamInfo("manager-name", element.name)
                        setTeamInfo("manager-designation", element.designation_type)
                        setImage("image1", element.image_base64)
                    } else if (element.designation_type_id === 2) {
                        setTeamInfo("lead-developer-name", element.name)
                        setTeamInfo("lead-developer-designation", element.designation_type)
                        setImage("image2", element.image_base64)
                    } else if (element.designation_type_id === 3) {
                        setTeamInfo("qa-name", element.name)
                        setTeamInfo("qa-designation", element.designation_type)
                        setImage("image3", element.image_base64)
                    } else if (element.designation_type_id === 4) {
                        setTeamInfo("lead-designer-name", element.name)
                        setTeamInfo("lead-designer-designation", element.designation_type)
                        setImage("image4", element.image_base64)
                    } else if (element.designation_type_id === 51) {
                        setTeamInfo("designer-1-name", element.name)
                        setTeamInfo("designer-1-designation", element.designation_type)
                        setImage("image5", element.image_base64)
                    } else if (element.designation_type_id === 52) {
                        setTeamInfo("designer-2-name", element.name)
                        setTeamInfo("designer-2-designation", element.designation_type)
                        setImage("image6", element.image_base64)
                    } else if (element.designation_type_id === 53) {
                        setTeamInfo("designer-3-name", element.name)
                        setTeamInfo("designer-3-designation", element.designation_type)
                        setImage("image7", element.image_base64)
                    } else if (element.designation_type_id === 54) {
                        setTeamInfo("designer-4-name", element.name)
                        setTeamInfo("designer-4-designation", element.designation_type)
                        setImage("image8", element.image_base64)
                    }
                });
            })
    }

    useEffect(() => {
        getTeam();
    })

    /* Set Team Info */
    function setTeamInfo(id, value) {
        document.getElementById(id).innerHTML = value
    }

    function setImage(id, value) {
        document.getElementById(id).src = value;
    }

    return (
        // main container

        <div className="about-us-container">

            {/* heading-container may serve as background */}
            {/* heading-container starts */}
            <div className="heading-container">
                <div className="img-container"> <img src={about_us_image} /> </div>
                <div className="super-text-container">
                    <div className="text-container">
                        <h1>About Carbon Print</h1>
                        <p>Our mission is to give accessability to everyone to estimate their carbon footprint through their day to day activities. Carbon print is a web platform where an individual can calculate the amount of carbon footprint they produced in relation to their daily activities. </p>
                    </div>
                </div>
            </div>

            <Container>

                {/* who-we-are-container starts  */}
                <div className="who-we-are-container" id="who-we-are-container-id">
                    {/* text container */}
                    <div>
                        <img src={who_we_are} />
                    </div>
                    <div>
                        <h2>Who we are?</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    </div>
                    {/* image container */}
                    <div>
                        {/* apply image here, then delete this comment */}
                        {/* <img /> */}
                    </div>
                </div>

                {/* our-values-container starts  */}
                <div id="our-values-container-id">
                    <div>
                        <h2>Our Values</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div>
                        <img src={our_values} />
                    </div>
                </div>


                {/* our-team-container starts  */}
                <div className="our-team-container">
                    <h1>Team Tiger Shark</h1>

                    {/* Rakesh */}
                    <div className="team-tile-container project-manager">
                        <div>
                            <img id="image1" />
                            <a href="http://linkedin.com/in/rakesh-kumar-aa3135117" target="_blank"> <img src={linked_icon} /> </a>
                            <a href="https://github.com/Rakesh2017" target="_blank"> <img id="github-image" src={github_image} /> </a>
                            <a href="https://stackoverflow.com/users/7872344/rakesh-kumar" target="_blank"> <img id="stack-overflow-image" src={stackoverflow_image} /> </a>
                        </div>

                        <h3 className="member-name" id="manager-name"></h3>
                        <p className="member-designation" id="manager-designation"></p>
                    </div>

                    {/* dalbir */}
                    <div className="team-tile-container lead-developer">
                        <div>
                            <img id="image2" />
                            <a href="https://www.linkedin.com/in/dalbir-singh-01815328/" target="_blank"> <img src={linked_icon} /> </a>
                            <a href="https://github.com/dalbirsrana" target="_blank"> <img id="github-image" src={github_image} /> </a>
                        </div>
                        <h3 className="member-name" id="lead-developer-name"></h3>
                        <p className="member-designation" id="lead-developer-designation"></p>
                    </div>

                    {/* Palak */}
                    <div className="team-tile-container developer quality-assurance">
                        <div>
                            <img id="image3" />
                            <a href="https://www.linkedin.com/in/palakdeep-kaur-88a020b7" target="_blank"> <img src={linked_icon} /> </a>
                        </div>
                        <h3 className="member-name" id="qa-name"></h3>
                        <p className="member-designation" id="qa-designation"></p>
                    </div>

                    {/* Lalit */}
                    <div className="team-tile-container lead-designer designer">
                        <div>
                            <img id="image4" />
                            <a href="linkedin.com/in/lalit-kumar-1467aa1b2" target="_blank"> <img src={linked_icon} /> </a>
                        </div>
                        <h3 className="member-name" id="lead-designer-name"></h3>
                        <p className="member-designation" id="lead-designer-designation"></p>
                    </div>

                    {/* Neha */}
                    <div className="team-tile-container designer">
                        <div>
                            <img id="image5" />
                            <a href="https://www.linkedin.com/in/neha-verma05" target="_blank"> <img src={linked_icon} /> </a>
                        </div>
                        <h3 className="member-name" id="designer-1-name"></h3>
                        <p className="member-designation" id="designer-1-designation"></p>
                    </div>

                    {/* Aanchal */}
                    <div className="team-tile-container designer">
                        <div>
                            <img id="image6" />
                            <a href="www.linkedin.com/in/aanchal02" target="_blank"> <img src={linked_icon} /> </a>
                        </div>
                        <h3 className="member-name" id="designer-2-name"></h3>
                        <p className="member-designation" id="designer-2-designation"></p>
                    </div>

                    {/* Arsh */}
                    <div className="team-tile-container designer">
                        <div>
                            <img id="image7" />
                            <a href="https://www.linkedin.com/in/arshdeep-kaur-271b351b2/" target="_blank"> <img src={linked_icon} /> </a>
                        </div>
                        <h3 className="member-name" id="designer-3-name"></h3>
                        <p className="member-designation" id="designer-3-designation"></p>
                    </div>

                    {/* Hiril */}
                    <div className="team-tile-container designer">
                        <div>
                            <img id="image8" />
                            <a href="" target="_blank"> <img src={linked_icon} /> </a>
                        </div>
                        <h3 className="member-name" id="designer-4-name"></h3>
                        <p className="member-designation" id="designer-4-designation"></p>
                    </div>

                </div>


            </Container>
        </div>
        // main container ends
    )

}

export default About;