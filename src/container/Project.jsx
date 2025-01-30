import React from 'react'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaEye } from '@react-icons/all-files/fa/FaEye';
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../wrapper'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useState, useEffect } from 'react'
import { useProjectsData } from '../hooks/use-project'

const Project = () => {
  const projectsData = useProjectsData();
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [filterProject, setFilterProject] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const types = ['Tous', 'UI/UX', 'Web'];

  const handleprojectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'Tous') {
        setFilterProject(projects);
      } else {
        setFilterProject(projects.filter((project) => project.frontmatter.type.includes(item)));
      }
    }, 500);
  }

  useEffect(() => {
    setProjects(projectsData);
    setFilterProject(projectsData);
  }, [projectsData]);

  return (
      <>
        <h2 style={{ padding: "3rem 0" }} className='head-text'>
          Mes différents<span className="text-secondary-color"> Projets</span>
        </h2>
  
        <div className="app__project-filter">
          {
            types?.map((item, index) => (
              <button
                key={index}
                onClick={() => handleprojectFilter(item)}
                className={`app__project-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
              >
                {item}
              </button>
            ))
          }
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__project-portfolio"
        >
          {
            filterProject?.map((project, index) => (
              <div className="app__project-item app__flex"  key={index}>
                <div
                  className="app__project-img app__flex"
                >
                  <GatsbyImage loading="lazy" style={{ height: "100%" }} image={getImage(project.frontmatter.projectimage.childImageSharp.gatsbyImageData)} alt={project.frontmatter.title} />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className="app__project-hover app__flex"
                  >
                    {
                      project.frontmatter.projectlink !== "null" && (
                        <a href={project.frontmatter.projectlink} aria-label={project.frontmatter.title} title={project.frontmatter.title} target="_blank" rel="noreferrer">
                          <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="app__flex"
                          >
                            <FaEye />
                          </motion.div>
                        </a>
                      )
                    }

                    {
                      project.frontmatter.codelink !== "null" && (
                        <a href={project.frontmatter.codelink} aria-label={`Github - ${project.frontmatter.title}`} title={`Github - ${project.frontmatter.title}`}  target="_blank" rel="noreferrer">
                          <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.90] }}
                            transition={{ duration: 0.25 }}
                            className="app__flex"
                          >
                            <FaGithub />
                          </motion.div>
                        </a>
                      )
                    }
                  </motion.div>
                </div>

                <div className="app__project-content app__flex">
                  <span className="bold-text">{project.frontmatter.title}</span>
                  <p className="p-text center" style={{ marginTop: 10 }}>{project.frontmatter.description}</p>

                  <div className="app__project-tag app__flex">
                    <p className="p-text center secondary-color">#{project.frontmatter.tags.join(' #')}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </motion.div>
      </>     
  )
}

export default AppWrap(
  MotionWrap(Project, 'app__projects'),
  'projets',
  'app__primarybg',
);