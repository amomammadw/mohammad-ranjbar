interface ISectionBase {
  title: string;
  description: string;
  image: string;
}

type ITechStack = ILinkItem[];

interface IProject extends ISectionBase {
  link?: string;
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
}
