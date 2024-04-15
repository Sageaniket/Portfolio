import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hello, I'm <b>Aniket Sinha</b> from Dhanbad, Jharkhand.
            Professionally, I am a <b>Security engineer</b> a passion for cybersecurity and software development Specializing in Vulnerability Assessment and Penetration Testing (VAPT), red teaming, and network pentesting. <br/><br/>
            In addition to my cybersecurity expertise, I bring a year of experience in <b>Full Stack development</b> to the table. With a focus on <b>MongoDB</b>, <b>ReactJS</b>, <b>NodeJS</b> and <b>ExpressJs</b>.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow.Apart from my work I love to play <b>CTF</b>, you can check out my Profile here <a href="https://tryhackme.com/p/Skykai" target='_blank'>TryHackME.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
      <Skills skill='VAPT' />
      <Skills skill='Network Pentesting' />
       <Skills skill='React' />
        <Skills skill='Sql' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='WireShark' />

        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About