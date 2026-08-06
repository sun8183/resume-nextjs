import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace ITroubleshooting {
  export interface Payload extends ICommon.Payload {
    /** ### 운영 및 트러블슈팅 리스트 */
    list: Item[];
  }

  interface Item {
    /** ### 트러블슈팅 제목 */
    title: string;

    /** ### 트러블슈팅 설명 */
    descriptions: IRow.Description[];
  }
}
