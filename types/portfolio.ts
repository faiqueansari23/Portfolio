export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
   storeUrl?: string;        // primary store link (used by the badge)
  storeLabel?: string;      // optional label, e.g. "Google Play Store"
  
  role: string[];
  liveStatus: 'production' | 'completed' | 'practice';
  featured?: boolean;
  publishedOn?: ('Google Play Store' | 'Apple App Store')[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  projectsMentioned: string[];
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface SalesforceCategory {
  title: string;
  items: string[];
  iconName: string;
}

export interface SalesforceProject {
  title: string;
  environment: string;
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  boardOrUniversity: string;
  year: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}
