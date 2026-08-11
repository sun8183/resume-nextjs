import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '월 5000만 건 규모의 문자·알림톡 발송 중계 서비스와 PG 정기과금 시스템을 운영하며, 중복 발송·중복 결제 같은 정합성 장애를 구조적으로 차단해온 5년차 백엔드 개발자입니다.',
    '템플릿 메서드 패턴 기반 PG 모듈 설계, 전송 멱등 처리를 통한 중복 발송 방지, ShedLock 기반 분산 스케줄러 제어 등 확장성과 안정성을 고려한 구조 설계를 지향합니다.',
    '장애 모니터링 알람 체계 구축과 재처리 구조 설계 경험을 바탕으로 운영 대응 효율을 개선해왔습니다.',
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
