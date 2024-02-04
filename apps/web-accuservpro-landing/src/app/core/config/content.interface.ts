// export interface ILandingStructure{
//     top_nav:any
//     pages: ILandingPageStructure[],
//     footer:any
// }

export interface ILandingPageStructure {
  // is home (grab params match to route, display correct content). to make it seo worthy we'd have to do server side rendering and all the CTA and urls propigate correctly to index. Make sure a tax and href when need to.
  route?: string;
  sections: ILandingPageSection[];
}
export interface ILandingPageSection {
  super_script?: string;
  h1?: string;
  h2?: string;
  copy?: string; //often need innerhtml
  image_url?: string | null;
  image_path?: string | null;
  ctas?: IlandingPageSectionCTA[];
  columns?: IlandingPageSectionColumns[];
  table_copy?: IlandingPageSectionTableCopy[];
  sub_script?: string;
  image_side?:'left'|'right';
}
export interface IlandingPageSectionCTA {
  text: string;
  external_url: string | null;
  internal_path: string | null;
}
export interface IlandingPageSectionColumns {
  h1: string;
  h2?: string;
  copy: string;
  image_url?: string |null;
  image_path?: string|null;
  h3?: string;
 
}
export interface IlandingPageSectionTableCopy {
  h1: string;
  cells: ILandingPageSectionTableCopyCell[];
}
export interface ILandingPageSectionTableCopyCell {
  h1: string;
  copy: string;
}
