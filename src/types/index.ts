export type ImageType = {
  height?: number;
  width?: number;
};

type ProjectBaseDetails = {
  imgPath: string;
  imgAlt?: string;
  projectName: string;
  technologiesShort?: string;
};

export interface ProjectDetailsType extends ProjectBaseDetails {
  technologiesLong: string;
  about?: string;
  liveHref?: string;
  codeHref?: string;
  show?: boolean;
  id?: string;
}

export interface ProjectType extends ProjectBaseDetails {
  toggleShowProjectDetails: () => void;
}

export type LanguageType = {
  language: string;
  handleLanguageChange?: (language: string) => void;
};
