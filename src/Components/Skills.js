import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { MdSecurity } from "react-icons/md";
import {FaReact, FaGitAlt, FaGithub, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1,DiMysql } from "react-icons/di";
import { SiMongodb, SiPostman,SiHackaday,SiWireshark  } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'VAPT':<MdSecurity />,  
        'C++': <CgCPlusPlus/>,
        'Network Pentesting':<SiHackaday />,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Sql:<DiMysql />,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        WireShark:<SiWireshark />,

        Bootstrap: <FaBootstrap/>,
       
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
