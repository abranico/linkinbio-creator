export interface ILinkinbio {
  img: string;
  name: string;
  description: string;
  links: ILink[];
}

export interface ILink {
  id: string;
  social: string;
  url: string;
  title: string;
}
