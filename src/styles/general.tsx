import { GeneralStylesProps } from '../shared/general';
import styled from 'styled-components';
import colors from './colors';

export const TextBodyMidium = styled.p<GeneralStylesProps>`
  font-weight: ${(props)=> props.fontWeight || 500};
  font-size: 16px;
  line-height: 24px;
  color: ${(props)=> props.color || colors.black};
  margin:
  ${(props)=> props.marginTop || 0}px
  ${(props)=> props.marginRight || 0}px
  ${(props)=> props.marginBottom || 0}px
  ${(props)=> props.marginLeft || 0}px
`;