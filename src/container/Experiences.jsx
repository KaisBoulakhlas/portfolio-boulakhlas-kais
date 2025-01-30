import React, { useEffect, useState } from 'react'
import { useExperiencesData } from '../hooks/use-experience';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../wrapper';

const Experiences = () => {
    const experiencesData = useExperiencesData();
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        setExperiences(experiencesData);
    }, [experiencesData]);

    return (
        <>
            <h2 style={{ padding: "3rem 0" }} className='head-text'>
                Mes<span className="text-secondary-color"> Expériences</span>
            </h2>
            <div className="app__skills-exp">
                {
                    experiences?.sort((a, b) => b.frontmatter.id - a.frontmatter.id).map((experience, index) => (
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
                                    <time className='app__skills-exp-item-year'>{experience.frontmatter.enddate !== "null" ? experience.frontmatter.startdate + "-" + experience.frontmatter.enddate : experience.frontmatter.startdate}</time>
                                </motion.div>
                                <span className='app__skills-exp-item-circle' />
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Experiences, 'app__exp'),
    'expériences',
    'app__primarybg',
);