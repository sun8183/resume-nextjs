import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IPortfolio {
  export interface Payload extends ICommon.Payload {
    /** ### 포트폴리오(개인 프로젝트) 리스트 */
    list: Item[];
  }

  export interface Item {
    /** ### 포트폴리오 제목 */
    title: string;

    /** ### 어디서 수행했는지 (or subtitle) */
    where: string;

    /** ### 한줄소개 (descriptions 목록과 별개로, 불릿 없이 표시된다) */
    summary?: string;

    /**
     * ### 시작일
     *
     * @format YYYY-MM
     * @example "2018-02"
     */
    startedAt: string;

    /**
     * ### 종료일
     *
     * @format YYYY-MM
     * @example "2021-02"
     * @description `undefined` 일 경우 나타나지 않는다.
     */
    endedAt?: string;

    /**
     * ### 설명
     */
    descriptions: IRow.Description[];
  }
}
