import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '슈어엠 주식회사',
      positions: [
        {
          title: '웹 개발자 (재입사) - B2C/B2B 문자·카카오 알림톡 발송 중계, PG 정기과금',
          startedAt: '2024-08',
          endedAt: '2026-04',
          descriptions: [
            'B2C/B2B 고객 문자·카카오 알림톡 발송 중계 서비스 운영 (월 100만 건 규모)',
            'PG 정기과금 서비스 단독 설계·개발: 템플릿 메서드 패턴 기반 결제 모듈 설계, 결제 상태 단계별 재처리 구조, ShedLock 기반 분산 스케줄러 제어',
            '해외 B2C 국제 문자 대행 서비스 프론트엔드 리뉴얼 단독 설계·개발: Vue i18n 기반 다국어 국제화 구조 재설계, Google OAuth 2.0 + JWT 인증 아키텍처 구축',
            '사내 지출경비 전자결재 시스템 단독 설계·구축: Spring Security 기반 역할별 결재 권한 분리, 공통 결재 프로세스 추상화',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Spring Scheduled',
            'Spring Security',
            'Vue.js',
            'MyBatis',
            'MS-SQL',
            'JWT',
            'ShedLock',
          ],
        },
        {
          title: '산업기능요원 복무 및 연장',
          startedAt: '2021-02',
          endedAt: '2023-08',
          descriptions: [
            '산업기능요원으로 복무 및 연장 근무 (2년 6개월)',
            '복무 종료 후 대학 학업 마무리 (2023.09 ~ 2024.08 졸업)',
          ],
        },
      ],
    },
  ],
};

export default experience;
