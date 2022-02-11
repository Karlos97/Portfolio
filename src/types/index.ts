export type ImageType = {
  height?: number;
  width?: number;
};

export type ProjectDetailsType = {
  imgPath: string;
  imgAlt?: string;
  projectName: string;
  technologiesShort?: string;
  technologiesLong: string;
  about?: string;
  liveHref?: string;
  codeHref?: string;
  show?: boolean;
  id?: string;
};

export type ProjectType = {
  imgPath: string;
  imgAlt?: string;
  projectName: string;
  technologiesShort?: string;
  toggleShowProjectDetails: () => void;
};

export type LanguageType = {
  language: string;
  handleLanguageChange?: (language: string) => void;
};
