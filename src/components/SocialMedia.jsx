import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
       <a href="#" title="Linkedin" target="_blank" rel="noreferrer">
            <BsLinkedin />
        </a>
        <a href="https://github.com/KaisBoulakhlas" title="Github" target="_blank" rel="noreferrer">
            <BsGithub  />
        </a>
        <a href="https://fr-fr.facebook.com/kais.boulakhlas" title="Facebook" target="_blank" rel="noreferrer">
            <FaFacebookF />
        </a>
    </div>
  )
}

export default SocialMedia