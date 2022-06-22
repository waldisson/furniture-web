import styled from 'styled-components'
import { ButtonLargeProps } from './ButtonLarge.types';
import {colors} from '../../styles';

export const BackgroundColor: Record<ButtonLargeProps['variation'], string> = {
  primary: colors.yellow,
  secundary: colors.gray,
  outline: colors.white,
  ghost: colors.transparent
}

export const BackgroundColorDisabled: Record<ButtonLargeProps['variation'], string> = {
  primary: colors.gray,
  secundary: colors.gray,
  outline: colors.transparent,
  ghost: colors.transparent,
};

export const FlexAlign: Record<ButtonLargeProps['iconPosition'], string> = {
  none: 'center',
  left: 'space-between',
  right: 'space-between',
  centerLeft: 'center',
  centerRight: 'center',
}

export const Container = styled.button<ButtonLargeProps>`
  display:flex;
  background-color: ${(props) => BackgroundColor[props.variation] || colors.transparent};
  width: ${(props) => props.width|| 100}%;
  border: ${props=>props.variation === 'outline' ? '2px solid'+ colors.black : 'none'};
  justify-content: ${props => FlexAlign[props.iconPosition] || 'center'};
  align-items: ${props => FlexAlign[props.iconPosition] || 'center'};
  padding: ${props => props.small ? '7.5px 16px' : '20px '};
  border-radius:8px;
  cursor: pointer;

  :disabled{
       background-color: ${props=> BackgroundColorDisabled[props.variation]};
       opacity: 0.5;
       cursor: not-allowed;
       &:hover{
           opacity: 0.5;
       }
    }
   :hover{
       opacity: 0.8;
   }
`;

export const Hidden = styled.div`
  width: 24;
  height: 24;
`;
