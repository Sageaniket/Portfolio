import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiTryhackme } from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Aniket</h4>
      <h4>Copyright &copy; 2024 AS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Sageaniket" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/aniketsinha03/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:aniketsinhadhn@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://tryhackme.com/p/Skykai" target="_blank"><SiTryhackme /></a>
      </div>
    </footer>
  )
}

export default Footer