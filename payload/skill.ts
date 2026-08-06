import { ISkill } from '../component/skill/ISkill';

const backEnd: ISkill.Skill = {
  category: 'Back-End',
  items: [{ title: 'Java' }, { title: 'Spring Boot' }, { title: 'MyBatis' }, { title: 'Resilience4j' }],
};

const backEndPortfolio: ISkill.Skill = {
  category: 'Back-End (포트폴리오)',
  items: [{ title: 'Kafka' }, { title: 'Redis' }, { title: 'Spring JPA' }],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [{ title: 'MySQL' }, { title: 'MS-SQL' }],
};

const infraDevOpsPortfolio: ISkill.Skill = {
  category: 'Infra & DevOps (포트폴리오)',
  items: [{ title: 'AWS' }, { title: 'Docker' }, { title: 'Jenkins' }],
};

const frontEnd: ISkill.Skill = {
  category: 'Front-End',
  items: [{ title: 'Vue3' }, { title: 'JavaScript' }, { title: 'jQuery' }, { title: 'JSP' }],
};

const tools: ISkill.Skill = {
  category: 'Tools',
  items: [
    { title: 'IntelliJ' },
    { title: 'Postman' },
    { title: 'DBeaver' },
    { title: 'k6' },
    { title: 'Git/GitHub' },
    { title: 'SVN' },
    { title: 'Notion' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backEnd, backEndPortfolio, database, infraDevOpsPortfolio, frontEnd, tools],
};

export default skill;
