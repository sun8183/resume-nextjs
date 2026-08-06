import { IPortfolio } from '../component/portfolio/IPortfolio';

const portfolio: IPortfolio.Payload = {
  disable: false,
  list: [
    {
      title: 'HTTP/1.1 스펙 기반, Java 소켓으로 직접 구현한 경량 WAS (Web Application Server)',
      where: '개인 프로젝트',
      startedAt: '2026-06',
      endedAt: '2026-07',
      summary:
        'JDK 소켓 레벨부터 직접 구현한 경량 Java Web Application Server. Servlet 유사 API, 가상호스트, 정적 파일 서빙, 스레드풀 기반 요청 처리, graceful shutdown을 포함',
      descriptions: [
        { content: '배경', weight: 'BOLD' },
        {
          content:
            'Spring 등 프레임워크가 내부적으로 처리해주는 요청 파싱, 커넥션 관리, 스레드 모델, 정적/동적 리소스 디스패치, 리소스 한계 제어를 ServerSocket 레벨부터 직접 구현하며 WAS의 동작 원리를 이해하고자 진행. 기능 구현 자체보다, 구현 과정에서 마주한 문제와 해결 과정을 기록하는 데 중점을 둔 프로젝트.',
        },
        {
          content: 'GitHub: https://github.com/sun8183/was-lab',
          href: 'https://github.com/sun8183/was-lab',
        },
      ],
    },
    {
      title: '동시성/트래픽 제어 이커머스 프로젝트',
      where: '루퍼스 백엔드 코스 4기 (개인 프로젝트)',
      startedAt: '2026-05',
      endedAt: '2026-07',
      summary:
        'Spring Boot 기반 이커머스 백엔드. 재고/쿠폰 동시성 제어, Redis 토큰버킷 기반 주문 대기열, Kafka 이벤트 기반 실시간 랭킹, Resilience4j 기반 결제 연동을 포함한 멀티모듈 프로젝트',
      descriptions: [
        { content: '배경', weight: 'BOLD' },
        {
          content:
            '루퍼스 백엔드 부트캠프 10주 과정에서 진행한 프로젝트로, 상품/브랜드/좋아요 등 기본 도메인 설계에서 시작해 동시성 제어, 대규모 트래픽 대응, 이벤트 기반 데이터 정합성까지 단계적으로 확장하며 구현. 기능 구현에 그치지 않고 문제를 재현·검증하고 부하테스트 실측으로 운영값을 산정하는 과정에 중점을 둔 프로젝트.',
        },
        {
          content: 'GitHub: https://github.com/sun8183/loop-pack-be-l2-vol4-java/tree/sun8183',
          href: 'https://github.com/sun8183/loop-pack-be-l2-vol4-java/tree/sun8183',
        },
      ],
    },
  ],
};

export default portfolio;
