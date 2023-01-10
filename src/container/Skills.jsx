import React from 'react'
import { motion } from 'framer-motion';
import { useCompetencesData } from '../hooks/use-competence';
import { useState, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AppWrap, MotionWrap } from '../wrapper';
import { useCvData } from '../hooks/use-file';
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";

const Skills = () => {
  const { name, cvpdf } = useCvData();
  const competencesData = useCompetencesData();
  const [competences, setCompetences] = useState([]);

  useEffect(() => {
    setCompetences(competencesData);
  }, [competencesData]);

  return (
    <>
      <h2 className="head-text">
        Mes<span className="text-secondary-color"> Compétences</span>
      </h2>
      <div  className="app__skills-container">
      <a href={cvpdf.publicURL} className="button dark" download="cv-boulakhlas-kais.pdf">{name} <FaDownload/></a>
      <motion.div className="app__skills-list">
          {
            competences?.map((competence) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={competence.frontmatter.name}
              >
                <div
                  className="app__skills-content app__flex"
                  style={{ backgroundColor: competence.frontmatter.bgcolor }}
                >
                  <GatsbyImage image={getImage(competence.frontmatter.icon.childImageSharp.gatsbyImageData)} alt={competence.frontmatter.name} />
                </div>
                <p className="p-text">{competence.frontmatter.name}</p>
              </motion.div>
            ))
          }
        </motion.div>
       
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'compétences',
  'app__whitebg',
);