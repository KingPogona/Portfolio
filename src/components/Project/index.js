import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

const Project = ({project}) => {

    // const currentProject = projects.filter((project) => projects.name === name);

    return (

        <div className="project-item" key={project.name}>
            <a href={project.url}>
                <img
                    src={require(`../../assets/projectImages/${project.image}`).default}
                    alt={project.name}
                    className="img-thumbnail"
                />
            </a>
            <div className="project-text">
                <h4>{project.name}</h4>
                {/* <p>{project.description}</p> */}
                <a href={project.github} className='github-link'>GITHUB</a>
            </div>
        </div>

    );
};

export default Project;