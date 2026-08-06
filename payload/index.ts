import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import troubleshooting from './troubleshooting';
import project from './project';
import portfolio from './portfolio';
import presentation from './presentation';
import education from './education';
import article from './article';
import etc from './etc';
import footer from './footer';

import { _global } from './_global';

import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { ITroubleshooting } from '../component/troubleshooting/ITroubleshooting';
import { IExperience } from '../component/experience/IExperience';
import { IProject } from '../component/project/IProject';
import { IPortfolio } from '../component/portfolio/IPortfolio';
import { IPresentation } from '../component/presentation/IPresentation';
import { IEducation } from '../component/education/IEducation';
import { IEtc } from '../component/etc/IEtc';
import { IFooter } from '../component/footer/IFooter';
import { IGlobal } from '../component/common/IGlobal';
import { IArticle } from '../component/article/IArticle';

const Payload: Payload = {
  profile,
  introduce,
  skill,
  experience,
  project,
  troubleshooting,
  portfolio,
  presentation,
  article,
  education,
  etc,
  footer,

  _global,
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  troubleshooting: ITroubleshooting.Payload;
  portfolio: IPortfolio.Payload;
  presentation: IPresentation.Payload;
  education: IEducation.Payload;
  article: IArticle.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;

  _global: IGlobal.Payload;
}

export default Payload;
