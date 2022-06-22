import React from 'react';
import colors from '../../styles/colors';

const Upload = (props: React.SVGProps<SVGSVGElement>) => {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L3.29289 5.29289L4.70711 6.70711L8 3.41421V15H10V3.41421L13.2929 6.70711L14.7071 5.29289L9.70711 0.292893Z" fill={color}/>
        <path d="M0 9V18C0 18.5523 0.447715 19 1 19H17C17.5523 19 18 18.5523 18 18V9H16V17H2V9H0Z" fill="#212121"/>
        </svg>
               
    )
}
export default Upload;