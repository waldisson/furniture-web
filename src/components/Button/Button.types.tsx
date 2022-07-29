import { GeneralStylesProps } from "../../shared/general";

export type VariationType =  'primary' | 'secundary'| 'outline' |'ghost';
export type IconPositionType =  'none' | 'left' | 'right' | 'centerleft' | 'centerRight';

export interface ButtonProps  extends GeneralStylesProps{
    title: string,
    variation: VariationType,
    icon?: React.ReactNode,
    iconPosition: IconPositionType, 
    disabled?: boolean,
    small?: boolean,
}
