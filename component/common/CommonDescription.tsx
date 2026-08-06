import { CSSProperties, PropsWithChildren } from 'react';

import { HrefTargetBlank } from '.';
import { IRow } from './IRow';

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
}: PropsWithChildren<{
  descriptions: IRow.Description[];
  option?: { padding?: boolean; hideBullet?: boolean };
}>) {
  return (
    <>
      {descriptions ? (
        <ul
          className={option?.padding ? 'pt-2' : ''}
          style={{
            paddingLeft: 0,
            listStylePosition: 'inside',
            ...(option?.hideBullet ? { listStyleType: 'none' } : {}),
          }}
        >
          {(() => {
            let subHeadingNumber = 0;

            return descriptions.map((description, descIndex) => {
              // BOLD 이상(섹션 대제목)을 만나면 소제목 번호를 초기화한다
              if (description.weight && fontWeight[description.weight] >= fontWeight.BOLD) {
                subHeadingNumber = 0;
              } else if (description.weight === 'MEDIUM') {
                subHeadingNumber += 1;
              }

              const number = description.weight === 'MEDIUM' ? subHeadingNumber : undefined;

              return (
                <>
                  <Description
                    description={description}
                    number={number}
                    key={descIndex.toString()}
                  />
                  {description.descriptions ? (
                    <DescriptionRecursion
                      descriptions={description.descriptions}
                      key={descIndex.toString()}
                    />
                  ) : (
                    ''
                  )}
                </>
              );
            });
          })()}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  return (
    <ul style={{ paddingLeft: '1.1em', listStylePosition: 'inside' }}>
      {descriptions.map((description, index) => {
        return (
          <>
            <Description description={description} key={index.toString()} />
            {description.descriptions ? (
              <DescriptionRecursion
                descriptions={description.descriptions}
                key={index.toString()}
              />
            ) : (
              ''
            )}
          </>
        );
      })}
    </ul>
  );
}

function Description({
  description,
  number,
}: PropsWithChildren<{ description: IRow.Description; number?: number }>) {
  const { href, postImage, postHref, weight } = description;
  const content = number ? `${number}. ${description.content}` : description.content;

  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li style={getFontWeight(weight)}>{content}</li>
      </>
    );
  })();

  return component;
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  const base: CSSProperties = { marginBottom: '0.4em' };

  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return base;
  }

  const style: CSSProperties = {
    ...base,
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };

  // MEDIUM 이상은 소제목 역할을 하므로 불릿 마커는 제거하고 위쪽에 여백을 준다
  // (BOLD 이상은 섹션 대제목이라 여백을 더 크게 준다)
  if (fontWeight[weight] >= fontWeight.MEDIUM) {
    style.listStyleType = 'none';
    style.marginTop = fontWeight[weight] >= fontWeight.BOLD ? '1em' : '0.8em';
    // MEDIUM 소제목은 시인성을 위해 굵게 강조한다
    style.fontWeight = Math.max(fontWeight[weight], fontWeight.BOLD);
  }

  return style;
}

// Pretendard Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  //
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};
