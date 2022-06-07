import styled from 'styled-components'
import { ButtonLargeProps } from './ButtonLarge.types';
import {colors} from '../../styles';

export const BackgroundColor: Record<ButtonLargeProps['variation'], string> = {
  primary: colors.yellow,
  secundary: colors.gray,
  outline: colors.white,
  ghost: colors.transparent
}

export const JustifyContent: Record<ButtonLargeProps['iconPosition'], string> = {
  none: 'center',
  left: 'space-between',
  right: 'space-between',
  centerLeft: 'center',
  centerRight: 'center',
}

export const AlignItems: Record<ButtonLargeProps['iconPosition'], string> = {
  none: 'center',
  left: 'space-between',
  right: 'space-between',
  centerLeft: 'center',
  centerRight: 'center',
  
}


export const Container = styled.button<ButtonLargeProps>`
  display:flex;
  background-color: ${(props) => BackgroundColor[props.variation] || colors.transparent};
  width: ${(props) => props.width || 100}%;
  border: ${(props) => props.outline ? '2px solid'+ colors.black : 'none'};
  justify-content: ${props => JustifyContent[props.iconPosition] || 'center'};
  align-items: ${props => AlignItems[props.iconPosition] || 'center'};
  padding:20px 16px;
  border-radius:8px;
`;
