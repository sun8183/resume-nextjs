import { PropsWithChildren } from 'react';
import PortfolioRow from './row';
import { CommonSection } from '../common/CommonSection';
import { IPortfolio } from './IPortfolio';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IPortfolio.Payload;

export const Portfolio = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="PORTFOLIO">
      <PortfolioRow payload={payload} />
    </CommonSection>
  );
}
