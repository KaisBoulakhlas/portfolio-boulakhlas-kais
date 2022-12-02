import React from 'react'
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import './skills.scss'
import { useCompetencesData } from '../../hooks/use-competence';
import { useState, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useExperiencesData } from '../../hooks/use-experience';

const Skills = () => {
  const competencesData = useCompetencesData();
  const experiencesData = useExperiencesData();
  const [competences, setCompetences] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setCompetences(competencesData);
    setExperiences(experiencesData);
  }, [competencesData, experiencesData]);

  return (
    <>
      <h2 className="head-text">Compétences & Experiences</h2>
      <div id="compétences" className="app__skills-container">
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
        <div className="app__skills-exp">
            {
              experiences?.map((experience, index) => (
                <motion.div key={index} className='app__skills-exp-item'>
                  <div className='app__skills-exp-item-content'>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className='app__skills-exp-item-tag'>{experience.frontmatter.tag}</span>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                  >
                    <p className='app__skills-exp-item-title'>{experience.frontmatter.title}</p>
                  </motion.div>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1.5 }}
                  >
                    <time className='app__skills-exp-item-year'>{experience.frontmatter.enddate !== "null" ? experience.frontmatter.startdate + "-" + experience.frontmatter.enddate : experience.frontmatter.startdate }</time>
                  </motion.div>
                    <span className='app__skills-exp-item-circle'/>
                  </div>
                </motion.div>
              ))
            }
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'compétences',
  'app__whitebg',
);