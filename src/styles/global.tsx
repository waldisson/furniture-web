import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

export default createGlobalStyle`
  @font-face {
    font-family: "Poppins Light";
    src: local("Poppins-Light"), url(${fonts.PoppinsLight}) format('truetype');
  }
  @font-face {
    font-family: "Poppins Regular";
    src: local("Poppins-Regular"), url(${fonts.PoppinsRegular}) format('truetype');
  }
  @font-face {
    font-family: "Poppins Medium";
    src: local("Poppins-Medium"), url(${fonts.PoppinsMedium}) format('truetype');
  }
  @font-face {
    font-family: "Poppins SemiBold";
    src: local("Poppins-SemiBold"), url(${fonts.PoppinsSemiBold}) format('truetype');
  }

    *{
        margin: 0;
        padding: 0;
        font-family: 'Poppins Regular';
    }
`