import { GeneralStylesProps } from "../../shared/general";

export type VariationType = 'primary' | 'secundary' | 'outline' | 'ghost'
export type IconPositionType = 'none' | 'left' | 'right' | 'centerLeft' | 'centerRight'

export interface ButtonLargeProps extends GeneralStylesProps {
  variation: VariationType,
  icon?: React.ReactNode;
  iconPosition: IconPositionType,
  title?: string,
  outline?: boolean,
  disabled?: boolean,
}