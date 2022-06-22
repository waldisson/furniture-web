import styled from 'styled-components'
import { AvatarProps } from './Avatar.types';
import {colors} from '../../styles';

// export const BackgroundColor: Record<AvatarProps['variation'], string> = {
//   primary: colors.yellow,
//   secundary: colors.gray,
//   outline: colors.white,
//   ghost: colors.transparent
// }


export const Container = styled.button<AvatarProps>`
  display: flex;
  border-radius: 100px;
  padding: ${props => props.image ? 1: 16}px;
  justify-content: center;
  background-color: ${colors.gray100};
  align-items: center;
  border: 1px solid ${colors.gray};
  width: ${props => props.size || 56};
  height: ${props => props.size || 56};
`;

export const Hidden = styled.div`

`;
