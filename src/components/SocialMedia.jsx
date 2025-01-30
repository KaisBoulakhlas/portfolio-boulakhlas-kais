import React from 'react'
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';


const SocialMedia = () => {
  return (
    <div className="app__social">
       <a href="https://linkedin.com/in/kaisboulakhlas" title="Linkedin" target="_blank" rel="noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://github.com/KaisBoulakhlas" title="Github" target="_blank" rel="noreferrer">
            <FaGithub  />
        </a>
        <a href="https://fr-fr.facebook.com/kais.boulakhlas" title="Facebook" target="_blank" rel="noreferrer">
            <FaFacebookF />
        </a>
    </div>
  )
}

export default SocialMedia