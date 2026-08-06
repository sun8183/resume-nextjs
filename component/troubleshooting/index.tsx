import { PropsWithChildren } from 'react';
import { ITroubleshooting } from './ITroubleshooting';
import TroubleshootingRow from './row';
import { CommonSection } from '../common/CommonSection';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ITroubleshooting.Payload;

export const Troubleshooting = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="TROUBLE SHOOTING">
      <TroubleshootingRow payload={payload} />
    </CommonSection>
  );
}
