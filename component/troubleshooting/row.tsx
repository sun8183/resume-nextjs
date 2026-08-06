import { PropsWithChildren } from 'react';
import { ITroubleshooting } from './ITroubleshooting';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';

export default function TroubleshootingRow({
  payload,
}: PropsWithChildren<{ payload: ITroubleshooting.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
}

function serialize(item: ITroubleshooting.Item): IRow.Payload {
  return {
    left: {},
    right: {
      title: item.title,
      descriptions: item.descriptions,
    },
  };
}
