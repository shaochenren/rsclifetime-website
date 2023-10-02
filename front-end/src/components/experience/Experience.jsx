import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const SkillsInterests = () => {
    return (
        <section id='skills-interests'>
            <h5>My Expertise & Interests</h5>
            <h2>Skills & Interests</h2>

            <div className="container skills__container">

                {/* Development Skills */}
                <div className="skills__development">
                    <h3>Development</h3>
                    <div className="skills__content">
                        <SkillItem skillName="HTML" proficiency="Proficient" />
                        <SkillItem skillName="CSS" proficiency="Proficient" />
                        <SkillItem skillName="JavaScript" proficiency="Proficient" />
                        <SkillItem skillName="React" proficiency="Proficient" />
                        <SkillItem skillName="Node.js" proficiency="Intermediate" />
                        <SkillItem skillName="PHP" proficiency="Intermediate" />
                    </div>
                </div>

                {/* Database Skills */}
                <div className="skills__database">
                    <h3>Database Management</h3>
                    <div className="skills__content">
                        <SkillItem skillName="SQL" proficiency="Intermediate" />
                        <SkillItem skillName="PostgreSQL" proficiency="Intermediate" />
                        <SkillItem skillName="MongoDB" proficiency="Intermediate" />
                        <SkillItem skillName="OracleDB" proficiency="Basic" />
                    </div>
                </div>

                {/* AI Skills */}
                <div className="skills__ai">
                    <h3>Artificial Intelligence</h3>
                    <div className="skills__content">
                        <SkillItem skillName="TensorFlow" proficiency="Intermediate" />
                        <SkillItem skillName="Keras" proficiency="Intermediate" />
                        <SkillItem skillName="PyTorch" proficiency="Intermediate" />
                    </div>
                </div>

                {/* Tools & Technologies */}
                <div className="skills__tools">
                    <h3>Tools & Technologies</h3>
                    <div className="skills__content">
                        <SkillItem skillName="Git" proficiency="Proficient" />
                        <SkillItem skillName="Docker" proficiency="Intermediate" />
                        <SkillItem skillName="Webpack" proficiency="Intermediate" />
                        <SkillItem skillName="Nginx" proficiency="Intermediate" />
                        <SkillItem skillName="Jenkins" proficiency="Basic" />
                    </div>
                </div>

            </div>
        </section>
    )
}

const SkillItem = ({ skillName, proficiency }) => {
    return (
        <article className='skills__details'>
            <BsPatchCheckFill className='skills__details-icon' />
            <div>
                <h4>{skillName}</h4>
                <small className='text-light'>{proficiency}</small>
            </div>
        </article>
    );
}

export default SkillsInterests;
