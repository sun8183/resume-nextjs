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
            'Spring 등 프레임워크가 내부적으로 처리해주는 요청 파싱, 커넥션 관리, 스레드 모델, 정적/동적 리소스 디스패치, 리소스 한계 제어를 ServerSocket 레벨부터 직접 구현하며 WAS의 동작 원리를 이해하고자 진행. 기능 구현 자체보다, 구현 과정에서 마주한 문제와 해결 과정을 기록하는 데 중점을 둔 프로젝트',
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
            '루퍼스 백엔드 부트캠프 10주 과정에서 진행한 프로젝트로, 상품/브랜드/좋아요 등 기본 도메인 설계에서 시작해 동시성 제어, 대규모 트래픽 대응, 이벤트 기반 데이터 정합성까지 단계적으로 확장하며 구현. 기능 구현에 그치지 않고 문제를 재현·검증하고 부하테스트 실측으로 운영값을 산정하는 과정에 중점을 둔 프로젝트',
        },
        { content: '구현', weight: 'BOLD' },
        {
          content: '동시성 제어 및 검증',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '멀티 아이템 주문 데드락을 재현 테스트로 확인하고, lock 획득 순서를 stockId 오름차순으로 고정해 순환 대기 조건 자체를 제거',
            },
            {
              content:
                '선착순 쿠폰 발급은 재고 100개에 200명 동시 요청 시 정확히 100명만 성공하도록, 쿠폰 1회성 사용 제약은 재고 락과 무관하게 독립 검증되도록 구현',
            },
          ],
        },
        {
          content: '부하테스트 기반 대기열 운영값 산정',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'admission 페이스 제어 + Redis Lua 기반 전역 토큰버킷의 2단 방어로 대기열 몰림 완화 구조 설계',
            },
            {
              content:
                'K6 RATE 20~80 단계별 부하테스트로 RATE=60부터 p95 지연이 100ms대에서 13.9초로 급증하는 캐패시티 한계를 확인, 안전 상한 50 TPS를 근거로 입장 가능한 batch-size=40 운영값 산정',
            },
          ],
        },
        {
          content: 'Kafka 기반 이벤트 실시간 랭킹',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '좋아요·주문 도메인 이벤트를 Kafka로 발행(commerce-api)하고 commerce-streamer가 소비해 Redis/MySQL에 반영하는 이벤트 기반 랭킹 파이프라인 구축',
            },
            {
              content:
                '주문 알림 이벤트는 Outbox 패턴으로 발행 유실까지 방지, 좋아요 이벤트는 AFTER_COMMIT 발행으로 롤백 트랜잭션의 팬텀 이벤트를 차단하는 등 도메인 중요도에 따라 이벤트 발행 신뢰성 수준을 차등 적용',
            },
            {
              content:
                'Redis Lua 스크립트로 dedup 체크와 ZINCRBY를 원자적으로 처리하고 DB event_key UNIQUE 제약을 이중 방어선으로 둬 멱등성 확보',
            },
            {
              content:
                '오늘자 랭킹은 Redis ZSET 실시간 조회, 과거 랭킹은 좋아요·주문 가중치(0.2:0.8)를 반영해 새벽 배치로 재계산한 MySQL 데이터를 TTL 1시간 만료로 캐싱해 조회하도록 이원화해 실시간성과 조회 성능을 동시에 확보',
            },
          ],
        },
        {
          content: '조회 성능 최적화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '최저가·찜수를 비정규화 컬럼으로 저장하고, 조회 조건 조합에 맞춘 복합 인덱스를 설계해 목록 조회 성능 개선',
            },
          ],
        },
        {
          content: '외부 결제 연동 장애 대응',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Resilience4j 서킷 브레이커를 결제 요청·조회로 분리 설정(요청은 재시도 없음, 조회는 멱등 재시도 적용)해 장애 특성에 맞는 복원력 확보',
            },
          ],
        },
        { content: '성과', weight: 'BOLD' },
        {
          content: '주문 요청 admission 페이스 제어 + 전역 rate limiter 트래픽 몰림 방지',
        },
        {
          content:
            '간헐적 500 오류를 재현 테스트로 근본 원인(락 순서 불일치)까지 추적해 해결, 데드락 재발 방지',
        },
        {
          content:
            '선착순 쿠폰 200명 동시 요청 환경에서도 정확히 100명만 발급되는 동시성 정합성 확보',
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
