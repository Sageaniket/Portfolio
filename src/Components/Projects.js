import React from 'react';
import ProjectBox from './ProjectBox';
import KeyloggerImage from '../images/keylogger.png';
import RegifyImage from '../images/Regify.png';
import RVSImage from '../images/Remotely-visible-Ide.jpg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={KeyloggerImage} projectName="Keylogger" />
        
        <ProjectBox projectPhoto={RegifyImage} projectName="Regifyme"/>
        <ProjectBox projectPhoto={RVSImage} projectName="RemotelyVisibleIDE" />
      </div>

    </div>
  )
}

export default Projects