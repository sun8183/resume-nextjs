import { ITroubleshooting } from '../component/troubleshooting/ITroubleshooting';

const troubleshooting: ITroubleshooting.Payload = {
  disable: false,
  list: [
    {
      title: '문자·알림톡·RCS 중복 전송 멱등 처리',
      descriptions: [
        { content: '배경', weight: 'BOLD' },
        {
          content:
            '특정 클라이언트 네트워크 불안정 또는 재시도 로직으로 인해 동일 전송 요청이 N회 이상 유입되어 수신자에게 동일 메시지가 중복 발송되는 문제 발생',
        },
        { content: '구현', weight: 'BOLD' },
        {
          content:
            '클라이언트에서 전달받은 요청 식별 키를 멱등 키(Idempotency Key)로 관리하고 DB Unique Key를 적용하여 동일 키의 중복 발송 요청을 차단, 최초 요청에 대해서만 발송 처리되도록 구현',
        },
        { content: '성과', weight: 'BOLD' },
        {
          content:
            '일 평균 800건을 발송하는 대형 고객사 환경에서 중복 발송을 구조적으로 차단하고, 수신자 중복 수신 및 불필요한 발송 비용 문제를 해결',
        },
        {
          content:
            '문자·알림톡·RCS 전 채널에 일관된 멱등 처리 적용으로 네트워크 불안정 환경에서도 발송 정합성 확보',
        },
      ],
    },
    {
      title: 'IIS 버전 제약 환경에서의 ASP 로깅 구조 설계',
      descriptions: [
        { content: '배경', weight: 'BOLD' },
        {
          content:
            'IIS 7.5 미만 환경에서 클라이언트 IP 기반 요청 추적에 제약이 있어 장애 발생 시 요청 흐름 분석이 어려운 문제 발생',
        },
        { content: '구현', weight: 'BOLD' },
        {
          content:
            'Server.Execute를 활용해 기존 요청 Context를 유지하면서 원본 요청 처리 전에 클라이언트 IP 및 요청 정보를 추출하고, 요청 단위의 추적 정보를 로그 파일에 기록하도록 ASP 로깅 구조 개선',
        },
        { content: '성과', weight: 'BOLD' },
        {
          content:
            '클라이언트 IP와 요청 정보를 로그 파일에 기록하여 기존에 추적하기 어려웠던 요청 흐름과 장애 발생 지점을 확인할 수 있도록 변경',
        },
        {
          content:
            'IIS 버전 및 환경별 의존 사항을 체크리스트로 문서화하여 이관 과정에서 발생할 수 있는 설정 오류를 방지하고 유사 작업에 재사용',
        },
      ],
    },
  ],
};

export default troubleshooting;
