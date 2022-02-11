import { Suspense, useState, useEffect } from 'react';
import i18n from 'i18next';
import '../../translations/translations';
import { useTranslation } from 'react-i18next';
import Project from './Project/Project';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import classes from './Projects.module.scss';
import { projectsData } from './projectsData';
import { LanguageType, ProjectDetailsType } from '../../types';

const Projects: React.FC<LanguageType> = ({ language }) => {
  const { t } = useTranslation();
  const [lockedProjectsData, setLockedProjectsData] = useState(projectsData);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const onToggleShowProjectDetailsHandler = (project: ProjectDetailsType) => {
    setLockedProjectsData([
      ...lockedProjectsData.map((proj) => {
        return proj.id !== project.id
          ? proj
          : { ...project, show: project.show ? !project.show : true };
      }),
    ]);
  };

  return (
    <Suspense fallback={'Loading...'}>
      <section className={classes['projects']}>
        <div className="projects-bg" />

        {lockedProjectsData?.map((project) => (
          <>
            <Project
              key={`projects-mini-${project.id}`}
              technologiesShort={project.technologiesShort}
              imgPath={project.imgPath}
              imgAlt={project.imgAlt}
              projectName={project.projectName}
              toggleShowProjectDetails={() =>
                onToggleShowProjectDetailsHandler(project)
              }
              language={language}
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
                language={language}
                about={t(`projects.projectAboutId${project.id}`)}
              />
            ) : null}
          </>
        ))}
      </section>
    </Suspense>
  );
};

export default Projects;
