export interface ILandingStructure{
    top_nav:any
    pages: ILandingPageStructure[],
    footer:any
}

export interface ILandingPageStructure{
    route:string,
    sections:any[]
}

export interface ILandingPageSection{
    template_name: ELandingPageTemplateName,
}

export enum ELandingPageTemplateName{
    HERO_01 = 'hero_01',
    TESTIMONIAL_01 = 'testimonial_01'
}