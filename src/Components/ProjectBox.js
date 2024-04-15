import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    KeyloggerDesc : "A keylogger or keystroke logger/keyboard capturing is a form of malware or hardware that keeps track of and records your keystrokes as you type.Software that records keystrokes or keys that you press on a keyboard,and this program saves them in a log file on your local computer.",
    KeyloggerGithub : "https://github.com/Sageaniket/keylogger",


    RegifymeDesc:"Regifyme is a full-stack web application that implements CRUD (Create, Read, Update, Delete) operations using MongoDB, Express.js, React.js, and Node.js. It provides a user-friendly interface for managing user details securely. Leveraging Axios for efficient HTTP calls and React hooks for streamlined state management, Regifyme ensures a seamless experience for users. The backend, powered by Node.js and Express.js, communicates with MongoDB for secure and scalable data storage. Whether creating, reading, updating, or deleting user data, Regifyme offers a robust solution for data management needs.",
    RegifymeGithub:"https://github.com/Sageaniket/Regifyme",
    
    
    RemotelyVisibleIDEDesc:"The project aims to develop a Java-based remote desktop application functioning within a local subnet. It operates similarly to TeamViewer, allowing a server PC to connect with and control multiple client PCs.Utilizing Java, socket programming, and Java Swing for GUI, the server establishes connections on given port, enabling clients to join by specifying the server's IP address within the subnet. Once connected, the server gains control over client desktops, facilitating remote viewing and manipulation via mouse and keyboard inputs.",
    RemotelyVisibleIDEGithub:"https://github.com/Sageaniket/Remotel-Visible-Ide",
    
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            
        </div>
    </div>
  )
}

export default  ProjectBox