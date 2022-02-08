export type ImageType = {
  height?: number;
  width?: number;
};

export type ProjectDetailsType = {
  imgPath: string;
  imgAlt?: string;
  projectName: string;
  technologiesShort: string;
  technologiesLong: string;
  about?: string;
  liveHref?: string;
  codeHref?: string;
  show?: boolean;
  id: string;
  toggleShowProjectDetails?: () => void;
  showProjectDetails?: () => void;
};

export type ProjectType = {
  imgPath: string;
  imgAlt?: string;
  projectName: string;
  technologies: string;
  showProjectDetails: () => void;
};
