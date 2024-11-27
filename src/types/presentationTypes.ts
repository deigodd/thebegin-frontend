export interface CardBase {
  span: string;
  bgColor: string;
}

export interface TextCard extends CardBase {
  type: 'text';
  title: string;
  content: string;
  titleTextColor: string;
  contentTextColor: string;
}

export interface ImageCard extends CardBase {
  type: 'image';
  image: string;
  imageAlt: string;
}

export interface OrganicCard extends CardBase {
  type: 'organic';
  title?: {
    text: string;
    color: string;
  };
  subtitle?: {
    text: string;
    color: string;
  };
}

export type Card = TextCard | ImageCard | OrganicCard;

export interface SectionConfig {
  layout: string;
  cards: Card[];
}

export interface PresentationData {
  sections: {
    [key: string]: SectionConfig;
  };
}