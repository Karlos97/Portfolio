import { useState } from 'react';
import Project from './Project/Project';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import classes from './Projects.module.scss';
import { projectsData } from './projectsData';
import { ProjectDetailsType } from '../../types';

const Projects: React.FC = () => {
  const [lockedProjectsData, setLockedProjectsData] = useState(projectsData);

  const onToggleShowProjectDetailsHandler = (project: ProjectDetailsType) => {
    setLockedProjectsData([
      ...lockedProjectsData.filter((proj) => proj.id !== project.id),
      { ...project, show: project.show ? !project.show : true },
    ]);
  };
  return (
    <section className={classes['projects']}>
      <div className="projects-bg" />

      {lockedProjectsData?.map((project) => (
        <>
          <Project
            key={`projects-mini-${project.id}`}
            technologies={project.technologiesShort}
            imgPath={project.imgPath}
            imgAlt={project.imgAlt}
            projectName={project.projectName}
            showProjectDetails={() =>
              onToggleShowProjectDetailsHandler(project)
            }
          />
          {project.show ? (
            <ProjectDetails
              key={`projects-modal-${project.id}`}
              toggleShowProjectDetails={() =>
                onToggleShowProjectDetailsHandler(project)
              }
              imgPath={project.imgPath}
              projectName={project.projectName}
              imgAlt={project.imgAlt}
              codeHref={project.codeHref}
              liveHref={project.liveHref}
              technologiesLong={project.technologiesLong}
              about={project.about}
            />
          ) : null}
        </>
      ))}
    </section>
  );
};
export default Projects;
