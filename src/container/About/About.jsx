import React from 'react'
import { images } from '../../constants'
import { motion } from 'framer-motion';
import './about.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const About = () => {
  const abouts = [
    { title: 'Développement web', description: 'elkklkflkflf',imgUrl: images.about01 },
    { title: 'Développement front-end', description: 'elkklkflkflf',imgUrl:images.about02},
    { title: 'Développement back-end', description: 'elkklkflkflf', imgUrl:images.about03},
    { title: 'Dévelopmment mobile', description: 'elkklkflkflf', imgUrl:images.about04}
  ]

  return (
    <>
      <h2 className='head-text'>
        Mes <span>Services</span>
        <br />
        Pour Votre <span>Projet Informatique</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About