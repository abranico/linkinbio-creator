export interface ILinkinbio {
  img: string;
  name: string;
  description: string;
  links: ILink[];
}

interface ILink {
  id: string;
  url: string;
  title: string;
  icon: string;
}
