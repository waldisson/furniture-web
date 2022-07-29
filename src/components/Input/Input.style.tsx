import styled from "styled-components";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";
import { InputProps } from "./Input.types";

export const Container = styled.div<InputProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
 
  input{
        width: 100%;
        height: 44px;
        background-color: ${colors.gray100};
        border-radius: 8px;
        border: none;
        padding: 20px 16px;
        font-family: ${fonts.PoppinsRegular} ;
        font-size: 16px;
        line-height: 24px;
        color: ${colors.black};
    

        :focus{
          outline: ${colors.gray300} solid 1px ;
        }

        ::placeholder{
          color: ${colors.gray500};
        }

        :disabled{
          background-color: ${colors.gray200};
        }
        :required{
          border:2px solid ${colors.red400}
        }
    } 
   
`;
export const Text = styled.label<InputProps>`
  margin: 8px 0 0 16px;
  color: ${props => props.error ? colors.red300 : colors.gray500};
  font-family: ${fonts.PoppinsRegular} ;
  font-size: 14px;
  line-height: 21px;
`;