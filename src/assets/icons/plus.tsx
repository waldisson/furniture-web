import React from 'react';
import colors from '../../styles/colors';

const Plus = (props: React.SVGProps<SVGSVGElement>) => {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V3H13V11H21V13H13V21H11V13H3V11H11Z" fill={color}/>
        </svg>
                
    )
}
export default Plus;