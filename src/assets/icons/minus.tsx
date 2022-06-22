import React from 'react';
import colors from '../../styles/colors';

const Minus = (props: React.SVGProps<SVGSVGElement>) => {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 13H3V11H21V13Z" fill={color}/>
        </svg>      
    )
}
export default Minus;