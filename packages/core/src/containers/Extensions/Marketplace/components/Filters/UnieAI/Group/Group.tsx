import React, { PropsWithChildren, CSSProperties, Children, cloneElement } from 'react';
import styled, { css } from 'styled-components';
import cx from 'classnames';
import { DefaultProps, KubedNumberSize, themeUtils } from '../theme';

const { getSizeValue } = themeUtils;

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

export type GroupDirection = 'row' | 'column';

const POSITIONS = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  apart: 'space-between',
};

type PositionKey = keyof typeof POSITIONS; // 自動推導為 "left" | "center" | "right" | "apart"

const getAlign = (direction: 'row' | 'column', position: PositionKey, grow: boolean) => {
  if (direction === 'row') {
    return css`
      align-items: center;
      justify-content: ${POSITIONS[position]};
    `;
  }
  return css`
    align-items: ${grow ? 'stretch' : POSITIONS[position]};
  `;
};

const getChildStyles = (spacing: string | number | undefined, grow: any) => {
  return css`
    flex-grow: ${grow ? 1 : 0};
  `;
};

const GroupContainer = styled('div')<GroupProps>`
  display: flex;
  flex-flow: ${({ direction, noWrap }) => `${direction} ${noWrap ? 'nowrap' : 'wrap'}`};
  ${({ direction, position, grow }) => {
    const dir = direction ?? 'row';
    const pos = position ?? 'center';
    const grow1 = grow ?? false;
    return getAlign(dir, pos, grow1);
  }}

  gap: ${
    ({ spacing, theme }) => getSizeValue(spacing ?? 'md', theme.layout.spacing) // 🔥 新增預設值
  };

  .group-child {
    ${({ spacing, grow }) => getChildStyles(spacing, grow)};
  }
`;

export interface GroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Defines justify-content property */
  position?: GroupPosition;

  /** Defined flex-wrap property */
  noWrap?: boolean;

  /** Defines flex-grow property for each element, true -> 1, false -> 0 */
  grow?: boolean;

  /** Space between elements */
  spacing?: KubedNumberSize;

  /** Defines flex-direction property, row for horizontal, column for vertical */
  direction?: GroupDirection;

  /** Defines align-items css property */
  align?: CSSProperties['alignItems'];
}

export function Group({
  children,
  position = 'left',
  grow = false,
  noWrap = false,
  spacing = 'md',
  direction = 'row',
  ...rest
}: PropsWithChildren<GroupProps>) {
  const items = (Children.toArray(children) as React.ReactElement[]).map(child =>
    cloneElement(child, {
      className: cx('group-child', child.props?.className),
    }),
  );

  return (
    <GroupContainer
      direction={direction}
      position={position}
      noWrap={noWrap}
      spacing={spacing}
      grow={grow}
      {...rest}
    >
      {items}
    </GroupContainer>
  );
}

Group.displayName = '@kubed/components/Group';
