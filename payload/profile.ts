import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '장애 대응 및 서비스 안정성 개선 경험을 갖춘 5년차 개발자 임태양',
    small: '',
  },
  contact: [
    {
      title: '4sunskyhyun@naver.com',
      link: 'mailto:4sunskyhyun@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Tech Blog',
      link: 'https://sunhistory.tistory.com/',
      icon: faBlog,
    },
    {
      title: 'sun8183 (LimTaeYang)',
      link: 'https://github.com/sun8183',
      icon: faGithub,
    },
  ]
};

export default profile;
