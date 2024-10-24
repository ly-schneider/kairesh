export type HeroSectionContent = {
  title: string;
  description?: string;
  backgroundImage: string;
  buttons: Array<
    {
      text: string;
      link: string;
    }
  >;
};
