import styled from 'styled-components'
import { ButtonLargeProps } from './ButtonLarge.types';
import {colors} from '../../styles';

export const BackgroundColor: Record<ButtonLargeProps['type'], string> = {
  primary: colors.yellow500,
  secondary: colors.gray500,
  outline: colors.transparent,
  ghost: colors.transparent
}

export const Container = styled.div``;
export const Title = styled.p``;