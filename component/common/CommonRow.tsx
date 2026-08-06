import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h4 style={Style.gray}>{left.title}</h4>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? <h4>{right.title}</h4> : ''}
          {right.subTitle ? <i style={Style.gray}>{right.subTitle}</i> : ''}
          {right.summary ? <p className="mt-2 mb-0">{right.summary}</p> : ''}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{
                padding: isNeedDescriptionPadding,
                hideBullet: right.hideDescriptionBullet,
              }}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  );
}
