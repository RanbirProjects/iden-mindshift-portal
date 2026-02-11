
export enum Page {
  HOME = 'home',
  IDEN_ENGINE = 'iden-engine',
  MINDSHIFT = 'mindshift',
  BLOG = 'blog'
}

export interface NavItem {
  label: string;
  id: Page;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export interface SitemapNode {
  title: string;
  path: string;
  description: string;
  children?: SitemapNode[];
}
