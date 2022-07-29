import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: ${colors.gray100};
   color: ${colors.black};
   border-radius: 8px;
   padding: 8px;

   button{
    border: none;
    background-color: transparent;
    cursor: pointer;
   }
   
   span{
       font-size: 14px;
   }
`;
