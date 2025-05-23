import React from 'react'
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { Link } from 'gatsby';

const MiniFooter = () => {
    return (
        <footer className="footer app__flex">
            <div className="footer__container">
                <div className="footer__social__media">
                    <a href="https://fr.linkedin.com/in/kais-boulakhlas-135041155" title="Linkedin" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/KaisBoulakhlas" title="Github" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://fr-fr.facebook.com/kais.boulakhlas" title="Facebook" target="_blank" rel="noreferrer">
                        <FaFacebookF />
                    </a>
                </div>
                <div className="footer__rights">
                    <Link to="/mentions-legales" title="Mentions légales">
                        Mentions Légales
                    </Link>
                    <Link to="/politique-de-confidentialite" title="Politique de confidentialité">
                        Politique de confidentialité
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default MiniFooter