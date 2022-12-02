import React from 'react'
import { images } from '../../constants'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import './about.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useServicesData } from '../../hooks/use-service';

const About = () => {
  const servicesData = useServicesData();
  const abouts = [
    { title: 'Développement web', description: 'elkklkflkflf',imgUrl: images.about01 },
    { title: 'Développement front-end', description: 'elkklkflkflf',imgUrl:images.about02},
    { title: 'Développement back-end', description: 'elkklkflkflf', imgUrl:images.about03},
    { title: 'Dévelopmment mobile', description: 'elkklkflkflf', imgUrl:images.about04}
  ]

  return (
    <div className='container'>
      <h2 className='head-text'>
        Mes <span>Services</span>
        <br />
        Pour Votre <span>Projet Informatique</span>
      </h2>

      <div id="services" className="app__profiles">
        {
          servicesData.map((service, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={service.frontmatter.titre + index}
            >
              <GatsbyImage image={getImage(service.frontmatter.serviceimage.childImageSharp.gatsbyImageData)} alt={service.frontmatter.titre}/>
              <h2 className="bold-text" style={{ marginTop: 20 }}>{service.frontmatter.titre}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{service.frontmatter.description}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default AppWrap(About, 'services');