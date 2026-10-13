import { IProject } from '../component/project/IProject';
import cardModuleDiagram from '../asset/card-module.png';
import schedulerDiagram from '../asset/scheduler.png';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'PG 정기과금 서비스 도입',
      where: '슈어엠 주식회사 (단독 설계·개발)',
      startedAt: '2025-11',
      endedAt: '2026-02',
      descriptions: [
        { content: '배경', weight: 'BOLD' },
        {
          content:
            '기업 고객 30곳의 부가 서비스 비용이 전용 계좌 기반 수기 정산으로 운영되어 담당자 누락 및 고객 관리 포인트 증가 문제가 발생. 정기과금 카드 결제 자동화를 위해 카드 등록 모듈과 자동화 스케줄러 전반을 단독 설계·구축',
        },
        { content: '구현', weight: 'BOLD' },
        {
          content: '정기과금용 카드 등록의 PG사 이중화 및 확장 구조 설계',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '카드 등록 API가 결제와 빌링키 발급을 함께 처리하는 구조로, 등록 시작 → PG 결제·카드 등록 → 결제 취소 → 등록 완료의 처리 흐름과 단계별 상태 기록·알림을 템플릿 메서드로 표준화하고, PG사별 결제·빌링키 발급·취소 API 호출 로직을 분리​하여 신규 PG 추가 시 해당 구현만으로 확장 가능하도록 설계',
            },
            {
              content:
                '카드 등록 중 PG 장애 발생 시 백업 PG로 자동 전환하고, 장기 장애에는 DB의 사용 PG 설정 변경만으로 재배포 없이 신규 카드 등록 PG를 전환할 수 있도록 구성',
            },
            { content: '', postImage: cardModuleDiagram },
          ],
        },
        {
          content: '결제 상태 단계별 분리 및 재처리 구조 설계',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '결제 실패 원인을 비즈니스 실패(잔액 부족·한도 초과 등)와 PG 장애(응답 지연·일시적 오류 등)로 분류​하고, 결제 프로세스를 READY → PENDING → SUCCESS / FAIL 단계로 상태 관리하여 처리 상태를 DB에 기록',
            },
            {
              content:
                '비즈니스 실패는 재시도 없이 고객에게 알림을 발송하고, 재시도 가능한 PG 처리 오류는 마지막 처리 상태를 기준으로 해당 PG 처리 구간부터 재시도​할 수 있도록 자동 복구 구조를 설계',
            },
            {
              content:
                'PG사로부터 최종 결제 결과를 수신하지 못한 경우 PG 결제 결과 조회 API를 주기적으로 호출하여 최종 상태를 확인하고, 내부 결제 상태와 PG사 결제 상태를 동기화​하여 상태 정합성을 확보',
            },
          ],
        },
        {
          content: '이중화 환경 스케줄러 단일 실행 보장',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '이중화 환경에서 스케줄러의 중복 실행으로 인한 중복 결제 가능성을 식별하고, ShedLock 기반 분산 락을 적용하여 단일 인스턴스에서만 실행되도록 초기 설계에 반영',
            },
          ],
        },
        { content: '', postImage: schedulerDiagram },
        {
          content: '장애 모니터링 및 알림 체계 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'PG 처리 스케줄러의 단계별 실행 결과를 주기적으로 모니터링하고, 실패 유형 및 이상 징후에 따라 Rocket.Chat REST API 기반 알림을 발송​하도록 장애 모니터링 및 알림 체계 구축',
            },
          ],
        },
        { content: '성과', weight: 'BOLD' },
        {
          content:
            '기업 고객 30곳의 수기 정산 프로세스를 카드 자동결제로 전환하여 담당자의 수작업 및 누락 리스크 제거',
        },
        {
          content: 'PG사 장애 발생 시 재배포 없이 대체 PG사로 전환 가능한 운영 체계 확보',
        },
        {
          content:
            '이중화 환경에서 스케줄러 단일 실행을 보장하여 중복 결제 방지 및 데이터 정합성 확보',
        },
        {
          content:
            '결제 장애 발생 시 마지막 처리 상태를 기준으로 실패 구간부터 자동 재처리하는 복구 구조를 구축하여 장애 대응 자동화 및 결제 처리 안정성 확보',
        },
      ],
    },
    {
      title: '해외 B2C 국제 문자 발송 서비스',
      where: '슈어엠 주식회사 (단독 설계·개발)',
      startedAt: '2025-02',
      endedAt: '2025-11',
      descriptions: [
        { content: '배경', weight: 'BOLD' },
        {
          content:
            '다국어 리소스가 XML 및 JSP 소스 전반에 분산되어 국가 추가 시 수정 범위와 관리 복잡도가 증가함에 따라, Vue-i18n 기반의 국제화 구조로 전환',
        },
        { content: '구현', weight: 'BOLD' },
        {
          content: 'Vue i18n 기반 다국어 국제화 구조 재설계',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존 XML 기반 국제화 구조를 Vue i18n + JSON 언어팩으로 전환. 화면 단위 키 체계를 설계하여 13개국 다국어 지원 및 신규 언어 추가 시 기존 코드 수정 없이 JSON 파일 추가만으로 확장 가능한 구조 확보',
            },
            {
              content:
                '도메인 기반으로 분기되던 다국어 렌더링 구조를 쿠키 기반으로 전환. 사용자 언어 설정을 세션 전반에 걸쳐 일관되게 유지하고, 도메인 분기에 따른 불필요한 리렌더링 제거',
            },
          ],
        },
        {
          content: 'OAuth 2.0 + JWT 인증 아키텍처 설계 및 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Google OAuth 2.0 Authorization Code Flow 기반 인증 시스템 설계' },
            {
              content:
                'JWT Refresh Token Rotation을 적용하여 토큰 갱신 시 기존 Refresh Token을 즉시 폐기하고 신규 토큰을 발급함으로써, Refresh Token 재사용을 방지',
            },
          ],
        },
        { content: '성과', weight: 'BOLD' },
        {
          content:
            'Vue i18n JSON 구조 전환으로 국가 추가 작업을 평균 일주일 → 약 3시간으로 단축, 13개국 다국어 지원 체계 확보',
        },
        {
          content:
            '쿠키 기반 언어 처리로 전환하여 도메인 분기 과정에서 발생하던 불필요한 리렌더링을 제거하고, 언어 변경 및 페이지 이동 시 일관된 화면 전환을 구현',
        },
        {
          content:
            'Google OAuth 2.0 기반 소셜 로그인 옵션을 추가하여 가입·로그인 절차를 간소화하고, JWT Refresh Token Rotation을 도입하여 기존 Refresh Token의 재사용을 차단',
        },
      ],
    },
    {
      title: '사내 지출경비 전자결재 시스템 도입',
      where: '슈어엠 주식회사 (단독 설계·개발)',
      startedAt: '2024-11',
      endedAt: '2025-01',
      descriptions: [
        { content: '배경', weight: 'BOLD' },
        {
          content:
            '엑셀 및 수기 방식으로 운영되던 지출경비 결재 프로세스에서 문서 누락 및 처리 지연 문제가 반복 발생하여 전자결재 시스템을 설계·구축하여 결재 흐름 자동화 및 운영 효율화를 담당',
        },
        { content: '구현', weight: 'BOLD' },
        {
          content: 'Spring Security 기반 역할별 결재 권한 분리',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '팀원·팀장·총무 등 역할별 결재 권한을 Spring Security 기반 RBAC 구조로 분리 설계. 역할별 접근 가능한 결재 단계와 수행 가능한 액션(요청·승인·반려·취소)을 정의해 권한 오남용을 방지',
            },
          ],
        },
        {
          content: '공통 결재 프로세스 기반 확장 구조 설계',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '체력단련비, 연장근무일지 등 향후 추가될 결재 문서 유형을 고려해 공통 결재 프로세스를 추상화. 결재 상태(요청·승인·반려·취소)는 공통 흐름으로 정의하고, 문서 유형별 세부 로직만 별도 구현체에 담당시켜 신규 문서 유형이 생겨도 공통 흐름 코드는 그대로 재사용',
            },
          ],
        },
        {
          content: '단계별 사내 메신저 알림 체계 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '결재 요청·취소·승인·반려 각 단계에서 관련 담당자에게 Rocket.Chat REST API 연동으로 알림이 자동 발송되는 구조 구축, 결재 단계와 역할 기준으로 발송 대상 설정',
            },
          ],
        },
        { content: '성과', weight: 'BOLD' },
        {
          content:
            '사내 임직원 50명이 사용하는 전자결재 시스템을 설계·구축, 엑셀·수기 기반 결재 프로세스를 전면 시스템화',
        },
        {
          content:
            '역할 기반 권한 분리로 결재 단계별 접근 제어 명확화, 권한 오남용 및 문서 누락 리스크 제거',
        },
        {
          content:
            '공통 결재 프로세스 추상화로 신규 결재 문서 유형이 추가돼도 공통 흐름은 그대로 두고 문서별 로직만 얹으면 되어, 반복적인 결재 시스템 개편 부담 감소',
        },
        {
          content:
            '단계별 알림 자동화로 수동 확인 없이 결재 진행 상황 실시간 파악, 처리 지연 문제 개선',
        },
      ],
    },
  ],
};

export default project;
