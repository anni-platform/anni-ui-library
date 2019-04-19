import styled from 'styled-components';
import { EASE_OUT_BACK } from 'shared/constants';
import Utils from 'shared/utils';

export const CardControls = styled.div`
  align-items: center;
  display: flex;
  height: 0;
  justify-content: space-between;
  padding: 0 24px;
  transition: 240ms ${EASE_OUT_BACK};
  overflow: hidden;
`;

export const CardDetails = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  height: auto;
  padding: 16px 24px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.bgA};
  box-shadow: 0 2px 24px 0 ${({ theme }) => theme.shadow};
  cursor: ${props => (props.active ? 'pointer' : 'default')};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: 320ms ${EASE_OUT_BACK};
  overflow: visible;
  padding: ${props => props.padded && '48px'};
  position: relative;
  ${Utils.margin};
  &:hover {
    box-shadow: ${props =>
      props.active && `4px 12px 24px 0 ${({ theme }) => theme.shadow}`};
    transform: ${props => props.active && 'scale(1.016)'};
    ${CardControls} {
      height: auto;
      padding: 8px 24px 24px 24px;
    }
  }
`;

export const DraggableCard = styled.div`
  &:hover {
    .disableDnD {
      opacity: 1;
      transform: scale(1);
    }
    > div {
      box-shadow: ${props =>
        props.active
          ? `4px 12px 24px 0 ${({ theme }) => theme.shadow};`
          : 'none'};
      transform: scale(${props => (props.active ? 1.016 : 1)});
      ${CardControls} {
        height: auto;
        padding: 8px 24px 24px 24px;
      }
    }
  }
`;
