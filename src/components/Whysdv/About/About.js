
import React from 'react';
import './About.css';
import ml2 from '../assets/ml2.jpg';



const About = () => {
    return (
        <div className="about-container">
            <div className="content">
                <h1 className="about-title">About ML</h1>
                <p className="about-text">
                Machine learning is a transformative technology shaping the future across numerous fields, from healthcare and finance to entertainment and beyond. By enabling systems to learn from data, it drives innovation and efficiency, allowing for personalized experiences, advanced automation, and predictive insights. As industries increasingly rely on data-driven decisions, skills in machine learning open up vast opportunities. Hands-on experience in this domain is essential, as it bridges theoretical knowledge with real-world application. Guided by skilled mentors, learners can build confidence and expertise, navigating challenges and developing practical skills that are crucial for a successful career in this high-impact field.
                </p>

                <div className="about-cards-container">
                    <div className="about-card">
                        <img src= {ml2} alt="Card 1" className="card-image"/>
                    </div>
                </div>

                <div className="animated-line"></div>
            </div>
            <div className="days-section">
                <div className="day">
                    <div className="about-circle">Day 1</div>
                    <p className="day-description">
                    The workshop begins with an in-depth introduction to Python programming, covering everything from basic syntax to practical applications, crafted specifically for beginners. Participants will gain a strong grasp of Python fundamentals and will be introduced to core Machine Learning concepts, building a solid foundation for future AI work. This session provides essential skills and insights, setting the stage for more advanced learning in the next session.
                </p>
                </div>
                <div className="line" />
                <div className="day">
                    <div className="about-circle">Day 2</div>
                    <p className="day-description">
                    Participants will delve into the practical implementation of Machine Learning, developing simple projects under supervision, experience hands-on training, applying their newly acquired knowledge to real-world scenarios with guidance from SAE Club members. This interactive session ensures participants leave with practical skills and a sense of accomplishment. E-certificates will be awarded to all attendees, recognizing their participation and learning.  </p>
                </div>
            </div>
        </div>
    );
};

export default About;
