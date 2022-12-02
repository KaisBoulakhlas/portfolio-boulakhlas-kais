import React from 'react'
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import './skills.scss'
import { useCompetencesData } from '../../hooks/use-competence';
import { useState, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AppWrap } from '../../wrapper';

const Skills = () => {
  const competencesData = useCompetencesData();
  const [competences, setCompetences] = useState([]);
  console.log(competences);
  useEffect(() => {
    setCompetences(competencesData);
  }, [competencesData]);

  return (
    <>
      <h2 className="head-text">Compétences & Experiences</h2>
      <div id="compétences" className="app__skills-container">
      <motion.div className="app__skills-list">
          {
            competences.map((competence) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={competence.frontmatter.name}
              >
                <div
                  className="app__skills-content app__flex"
                  style={{ backgroundColor: competence.frontmatter.bgColor }}
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

export default AppWrap(Skills, 'compétences');