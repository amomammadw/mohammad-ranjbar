interface IImage {
  src: string;
  alt?: string;
}

interface ISectionBase {
  title: string;
  description: string;
  image: IImage;
}

type ITechStack = ILinkItem[];

interface IProject extends ISectionBase {
  link?: string;
  stack?: string[];
}

interface IHeader {
  title: string;
  slogan: string;
  items: ILinkItem[];
}

interface IConfig {
  header: IHeader;
  about: ISectionBase;
  projects: IProject[];
  skills: IImage[];
}
