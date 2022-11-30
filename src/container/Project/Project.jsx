import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import './project.scss'
import { useState } from 'react'

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [filterProject, setFilterProject] = useState();
  const [animateCard, setAnimateCard] = useState({ y : 0, opacity: 1 })
  const handleWorkFilter = (item) => {

  }

  return (
    <>
      <h2 className='head-text'>
        Mes différents<span>Projets</span>
      </h2>
      <div className="app__work-filter">
        {['Tous','UI/UX', 'Site web', 'Mobile'].map((item, index) => (
          <div 
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))
        }
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >

      </motion.div>
    </>
  )
}

export default Project