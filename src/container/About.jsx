import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../wrapper';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useServicesData } from '../hooks/use-service';
import { useEffect, useState } from 'react';

const About = () => {
  const servicesData = useServicesData();
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, [servicesData]);

  return (
    <>
      <h2 style={{ padding: "2rem 0 0" }}  className='head-text'>
        Mes <span className="text-secondary-color">Services</span>
      </h2>
      <div className="app__profiles">
        {
          services?.map((service, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={service.frontmatter.titre + index}
            >
              <GatsbyImage loading="lazy" image={getImage(service.frontmatter.serviceimage.childImageSharp.gatsbyImageData)} alt={service.frontmatter.titre}/>
              <h2 className="bold-text" style={{ marginTop: 20 }}>{service.frontmatter.titre}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{service.frontmatter.description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'services',
  'app__whitebg',
);