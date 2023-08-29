import { Skill } from '@/types/skills'

export const stack: Skill[] = [
  {
    title: 'Languages',
    data: ['Javascript', 'Typescript', 'Java'],
  },

  {
    title: 'Frontend',
    data: [
      { title: 'React', data: ['Redux/Saga/Toolkit', 'MUI'] },
      { title: 'Angular', data: ['RxJS', 'Angular Material'] },
      { title: 'Next.js', data: [] },
      { title: '', data: ['Tailwind CSS', 'SCSS/SASS/CSS'] },
    ],
  },
  {
    title: 'Backend',
    data: ['Node', 'Express', 'Nest.js', 'Spring Boot'],
  },
  {
    title: 'Databases',
    data: [
      { title: 'NoSQL', data: ['MongoDB', 'Redis'] },
      { title: 'SQL', data: ['PostgreSQL', 'AWS Redshift'] },
    ],
  },

  {
    title: 'DevOps',
    data: [
      { title: 'Containers', data: ['Docker', 'Kubernetes'] },
      {
        title: 'CI/CD',
        data: ['Github Actions', 'Circle CI', 'Codefresh'],
      },
      {
        title: 'Cloud',
        data: ['AWS'],
      },
    ],
  },
  {
    title: 'Tests',
    data: [
      {
        title: 'Unit/API',
        data: ['Jest'],
      },

      {
        title: 'E2E',
        data: ['Cypress', 'Puppeteer'],
      },
    ],
  },
  {
    title: 'Other',
    data: [
      { title: 'Tools', data: ['Linux', 'Git', 'Figma'] },
      { title: 'Methodologies', data: ['Agile', 'SCRUM'] },
    ],
  },
]