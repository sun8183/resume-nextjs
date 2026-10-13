import { ISkill } from '../component/skill/ISkill';

const backEnd: ISkill.Skill = {
  category: 'Back-End',
  items: [{ title: 'Java' }, { title: 'Spring Boot' }, { title: 'MyBatis' }],
};

const backEndPortfolio: ISkill.Skill = {
  category: 'Back-End (포트폴리오)',
  items: [
    { title: 'Kafka' },
    { title: 'Redis' },
    { title: 'Spring JPA' },
    { title: 'Resilience4j' },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [{ title: 'MySQL' }, { title: 'MS-SQL' }],
};

const frontEnd: ISkill.Skill = {
  category: 'Front-End',
  items: [{ title: 'Vue3' }, { title: 'JavaScript' }, { title: 'jQuery' }, { title: 'JSP' }],
};

const tools: ISkill.Skill = {
  category: 'Tools',
  items: [{ title: 'k6' }, { title: 'Git/GitHub' }, { title: 'SVN' }],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backEnd, backEndPortfolio, database, frontEnd, tools],
};

export default skill;
