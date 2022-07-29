import React from 'react';
import colors from '../../styles/colors';

const PhotoIcon = (props: React.SVGProps<SVGSVGElement>) => {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17ZM12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z" fill={color} />
            <path d="M17 10C17.5523 10 18 9.55228 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 9.55228 16.4477 10 17 10Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V5H9.4C7.15979 5 6.03969 5 5.18404 5.43597C4.43139 5.81947 3.81947 6.43139 3.43597 7.18404C3 8.03969 3 9.15979 3 11.4V14.6C3 16.8402 3 17.9603 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C6.03969 21 7.15979 21 9.4 21H14.6C16.8402 21 17.9603 21 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C21 17.9603 21 16.8402 21 14.6V11.4C21 9.15979 21 8.03969 20.564 7.18404C20.1805 6.43139 19.5686 5.81947 18.816 5.43597C17.9603 5 16.8402 5 14.6 5H15V4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601ZM9.4 7H14.6C15.7531 7 16.4977 7.00156 17.0643 7.04785C17.6077 7.09225 17.8091 7.1676 17.908 7.21799C18.2843 7.40973 18.5903 7.71569 18.782 8.09202C18.8324 8.19091 18.9078 8.39235 18.9521 8.93567C18.9984 9.50235 19 10.2469 19 11.4V14.6C19 15.7531 18.9984 16.4977 18.9521 17.0643C18.9078 17.6077 18.8324 17.8091 18.782 17.908C18.5903 18.2843 18.2843 18.5903 17.908 18.782C17.8091 18.8324 17.6077 18.9078 17.0643 18.9521C16.4977 18.9984 15.7531 19 14.6 19H9.4C8.24689 19 7.50235 18.9984 6.93567 18.9521C6.39235 18.9078 6.19091 18.8324 6.09202 18.782C5.71569 18.5903 5.40973 18.2843 5.21799 17.908C5.1676 17.8091 5.09225 17.6077 5.04785 17.0643C5.00156 16.4977 5 15.7531 5 14.6V11.4C5 10.2469 5.00156 9.50235 5.04785 8.93567C5.09225 8.39235 5.1676 8.19091 5.21799 8.09202C5.40973 7.71569 5.71569 7.40973 6.09202 7.21799C6.19091 7.1676 6.39235 7.09225 6.93567 7.04785C7.50235 7.00156 8.24689 7 9.4 7Z" fill={color} />
        </svg>
    )
}
export default PhotoIcon;