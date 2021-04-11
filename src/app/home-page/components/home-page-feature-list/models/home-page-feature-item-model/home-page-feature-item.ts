export type HomePageFeatureItemModel= {
  id: string;
  title: string;
  paragraph: string;
  buttonDescription: string;
};

export function emptyFeature(): HomePageFeatureItemModel {
  return {
    id: '',
    title: '',
    paragraph: '',
    buttonDescription: ''
  };
}
