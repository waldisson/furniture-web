import { GeneralStylesProps } from "../../types/general";

export interface ButtonLargeProps extends GeneralStylesProps {
  variation: 'primary' | 'secundary' | 'outline' | 'ghost',
  icon?: Element;
  iconPosition: 'none' | 'left' | 'right' | 'centerLeft' | 'centerRight',
  title?: string,
  outline?: boolean,
}