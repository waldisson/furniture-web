import styled from "styled-components";
import colors from "../../styles/colors";
import { ButtonProps } from "./Button.types";

export const BackgroundColor: Record<ButtonProps['variation'], string> = {
    primary: colors.yellow500,
    secundary: colors.gray100,
    outline: colors.white,
    ghost: colors.transparent,
};

export const BackgroundColorDisabled: Record<ButtonProps['variation'], string> = {
    primary: colors.gray500,
    secundary: colors.gray500,
    outline: colors.transparent,
    ghost: colors.transparent,
};

export const FlexAlign: Record<ButtonProps['iconPosition'], string> = {
    none: 'center',
    left: 'space-between',
    right: 'space-between',
    centerleft: 'center',
    centerRight: 'center',
};


export const Container = styled.button<ButtonProps>`
   display: flex;
   justify-content: ${props=> FlexAlign[props.iconPosition] || 'center'};
   align-items: ${props=> FlexAlign[props.iconPosition] || 'center'};
   background-color: ${(props) => BackgroundColor[props.variation] || colors.transparent};
   width: ${props=> props.width || 100}%;
   border: ${props=>props.variation === 'outline' ? '2px solid'+ colors.black : 'none'};
   padding: ${props=>props.small? '7.5px 16px' : '20px 16px'};
   border-radius: 8px;
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
    width: 24px;
    height: 24px;
`;

