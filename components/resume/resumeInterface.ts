export interface ResumeInterface {
  experiance: ContextDataEntity[];
  education: ContextDataEntity[];
  skills: SkillsEntity[];
}
export interface ContextDataEntity {
  name: string;  
  title: TitleInterface ;
  work: string;
  details: DetailsEntity;
  kpi: KpiEntity;
  cert: CertInterface ;
}
export interface TitleInterface {
  duration: string;
  jobtitle: string;
  location: string;
}
export interface DetailsEntity {
  context: string;
  info: string[];
}
export interface CertInterface  {
  path: string;
  name: string;
}
export interface KpiEntity {
  name: string;
  value: string;
}
export interface SkillsEntity {
  type: string;
  keywords: string;
}
