import styled from "styled-components";
import colors from "../../styles/colors";
import { AvatarProps } from "./Avatar.types";

export const Container = styled.button<AvatarProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   padding: ${props=>props.image ? 1: 16}px;
   background-color: ${colors.gray100};
   border: 1px solid ${colors.gray200};
   width: ${props=>props.size  || 56}px;
   height: ${props=>props.size  || 56}px;

   img{
      width: ${props=>props.size  || 56}px;
      height: ${props=>props.size  || 56}px;
      border-radius: 100px;
   }
`;