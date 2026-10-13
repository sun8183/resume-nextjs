import { IPortfolio } from '../component/portfolio/IPortfolio';
import loopersSummary from '../asset/loopers-summary.pdf';
import wasLabSummary from '../asset/was-lab-summary.pdf';

const portfolio: IPortfolio.Payload = {
  disable: false,
  list: [
    {
      title: '동시성/트래픽 제어 이커머스 프로젝트',
      where: '루퍼스 백엔드 코스 4기 (개인 프로젝트)',
      startedAt: '2026-05',
      endedAt: '2026-07',
      summary:
        'Java 21, Spring Boot 3.4 기반 이커머스 백엔드 멀티모듈 프로젝트. 동시성 제어, 대규모 트래픽 대응, 이벤트 기반 데이터 정합성까지 단계적으로 확장하며, 문제 재현과 부하테스트 실측으로 운영값을 산정하는 데 중점을 둔 프로젝트',
      descriptions: [
        { content: '기술 스택', weight: 'BOLD' },
        {
          content:
            'Java 21, Spring Boot 3.4, JPA/QueryDSL, MySQL 8.0, Redis, Kafka, Resilience4j, k6',
        },
        { content: '구현', weight: 'BOLD' },
        {
          content: '선착순 쿠폰 동시성 제어 & 멀티 아이템 주문 데드락 해결',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '발급 요청을 Kafka 단일 파티션으로 받아 컨슈머가 순차적으로 재고를 차감하고, 클라이언트는 requestId로 결과를 폴링하도록 비동기화해 오픈 직후 DB 락 경합 완화',
            },
            {
              content: 'DB 유니크 제약(user_id, coupon_id)으로 동일 유저 중복 발급 방지',
            },
            {
              content:
                '역순 다중 상품 주문 시 발생하던 데드락과 간헐적 500 오류를, 주문 항목을 stockId 오름차순으로 정렬해 모든 트랜잭션의 lock 획득 순서를 통일하는 방식으로 해결',
            },
          ],
        },
        {
          content: '주문 대기열 & 전역 Rate Limiter (부하테스트 기반 용량 산정)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Redis 대기열 + 입장 스케줄러로 유입 속도를 제어하고, 입장 후 주문 몰림은 Redis Lua 전역 토큰버킷으로 막는 2단 방어 구조 설계',
            },
            {
              content:
                'k6 단계별 고정 부하테스트(RATE 20~80)로 RATE 50까지 p95 100~140ms, RATE 60부터 13.9초로 급증하는 처리 한계를 확인해 안전 상한 50 TPS 도출',
            },
            {
              content:
                '실패율은 전 구간 0.5%대로 일정해 지연시간을 용량 경계 지표로 판단, 10 TPS 마진을 두고 입장 batch-size=40으로 운영값 확정',
            },
          ],
        },
        {
          content: 'Kafka 이벤트 기반 실시간 랭킹',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '랭킹 집계를 주문·좋아요 트랜잭션에서 분리해 Kafka로 발행하고, commerce-streamer가 소비해 반영하도록 구성해 응답 지연과 도메인 간 결합 제거',
            },
            {
              content:
                '알림·랭킹이 함께 쓰는 주문 이벤트는 Outbox 패턴으로 발행 유실을 막고, 랭킹 전용인 좋아요 이벤트는 AFTER_COMMIT 발행으로 단순하게 유지해 이벤트별 정합성 수준을 차등 적용',
            },
            {
              content:
                '재처리·재발행으로 같은 이벤트가 다시 와도 1회만 반영되도록 Redis는 Lua로 dedup과 ZINCRBY를 원자적으로 처리하고, DB는 event_key UNIQUE로 이중 방어',
            },
            {
              content:
                '오늘 랭킹은 Redis ZSET 실시간 누적, 과거 랭킹은 새벽 스케줄러가 주문 0.8·좋아요 0.2 가중치로 재계산 후 1시간 캐싱하도록 이원화',
            },
          ],
        },
        {
          content: '상품 목록 조회 성능 최적화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '상품 10만·좋아요 300만 건 환경에서 인덱스 추가 후에도 좋아요순 조회가 1.57초로 개선되지 않는 것을 측정해, 병목이 정렬이 아닌 집계에 있음을 확인',
            },
            {
              content:
                'likeCount를 상품 테이블에 반정규화(원자적 연산으로 갱신)하고 brandId 유무 × 정렬 3종 복합 인덱스 6개 구성, 요청이 몰리는 첫 페이지는 Redis 캐싱',
            },
            {
              content: '좋아요 쓰기는 119ms → 208ms로 느려졌지만, 조회 비중이 높아 반정규화를 선택',
            },
          ],
        },
        {
          content: 'PG 결제 연동: 결과 불명 결제의 상태 대사',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '타임아웃을 실패로 처리하면 PG가 이미 승인한 경우 이중 결제 위험이 있어, 응답을 받지 못한 결제는 결과 불명(REQUEST)으로 유지하고 멱등키가 없는 결제 요청은 재시도에서 제외',
            },
            {
              content:
                '대사 스케줄러가 REQUEST는 주문번호로, PENDING은 거래키로 PG를 조회해 상태를 확정하고, 주문당 진행 중 결제를 1건으로 제한해 결과 확정 전 재결제 차단',
            },
            {
              content:
                'Resilience4j 서킷 브레이커를 결제 요청·조회로 분리 설정하고 4xx·도메인 예외는 실패율 집계에서 제외해, PG 장애 시 최대 5초 타임아웃 대기 없이 즉시 503 응답',
            },
          ],
        },
        { content: '성과', weight: 'BOLD' },
        {
          content: '재고 100개 쿠폰에 200명 동시 발급 요청 시 정확히 100명만 성공',
        },
        {
          content: '역순 동시 주문에서 발생하던 데드락 해소',
        },
        {
          content:
            '좋아요순 조회 1.52초 → 117ms (브랜드 필터 시 1.01초 → 46ms), 최신순 515ms → 119ms',
        },
        {
          content: '타임아웃·콜백 유실이 발생해도 PG 상태와 일치하도록 결제 확정',
        },
        { content: '링크', weight: 'BOLD' },
        {
          content: '프로젝트 요약 (PDF)',
          href: loopersSummary,
        },
        {
          content: 'GitHub: https://github.com/sun8183/loop-pack-be-l2-vol4-java/tree/sun8183',
          href: 'https://github.com/sun8183/loop-pack-be-l2-vol4-java/tree/sun8183',
        },
      ],
    },
    {
      title: 'HTTP/1.1 스펙 기반, Java 소켓으로 직접 구현한 WAS (Web Application Server)',
      where: '개인 프로젝트',
      startedAt: '2026-06',
      endedAt: '2026-07',
      summary:
        '소켓 레벨부터 직접 구현한 Java Web Application Server. HTTP/1.1 요청 파싱(GET/HEAD/POST, keep-alive), Servlet 유사 API, 가상호스트, 정적 파일 서빙, 스레드풀, graceful shutdown을 포함한 프로젝트',
      descriptions: [
        { content: '배경', weight: 'BOLD' },
        {
          content:
            'HTTP/1.1(GET/HEAD/POST, keep-alive), 가상호스트, 정적 파일 스트리밍과 ETag, 스레드풀 포화 시 503, graceful shutdown을 포함하며, WAS의 내부 구조와 동작 방식을 직접 구현하여 학습한 프로젝트',
        },
        { content: '링크', weight: 'BOLD' },
        {
          content: '프로젝트 요약 (PDF)',
          href: wasLabSummary,
        },
        {
          content: 'GitHub: https://github.com/sun8183/was-lab',
          href: 'https://github.com/sun8183/was-lab',
        },
      ],
    },
  ],
};

export default portfolio;
