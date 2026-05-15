export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current: boolean;
  highlights: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  period: string;
  role: string;
  description: string;
  highlights: string[];
  techs: string[];
  links?: ProjectLink[];
}

export interface EducationItem {
  institution: string;
  major: string;
  period: string;
  gpa?: string;
  note?: string;
}

export interface CertItem {
  name: string;
  date: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  dob: string;
}

export type Theme = 'light' | 'dark';
