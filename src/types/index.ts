export type ImageType = {
  height?: number;
  width?: number;
};

export type ProjectDetailsType = {
  imgPath: string;
  imgAlt?: string;
  projectName: string;
  technologies: string;
  about?: string;
  liveHref?: string;
  codeHref?: string;
  toggleShowProjectDetails: () => void;
};

export type ProjectType = {
  imgPath: string;
  imgAlt?: string;
  projectName: string;
  technologies: string;
  showProjectDetails: () => void;
};
