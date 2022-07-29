import styled from "styled-components";
import colors from "../../styles/colors";
import { InputRangeProps } from "./InputRange.types";

export const Container = styled.div<InputRangeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .text-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  input{
        -webkit-appearance: none;
        width: 100%;
        height: 2px;
        background: ${colors.gray200};
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
        
        ::-webkit-slider-thumb{
            appearance: none;
            width: 32px;
            height: 16px;
            border-radius: 4px;
            background: ${colors.yellow400};
            cursor: pointer;
        }

    } 

`;
