import React from 'react';
import colors from '../../styles/colors';

const Star = (props: React.SVGProps<SVGSVGElement>) => {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.3788 2 12.725 2.214 12.8944 2.55279L15.6632 8.09026L21.6521 9.01163C22.0339 9.07037 22.3477 9.34379 22.4582 9.71397C22.5687 10.0841 22.4561 10.4849 22.169 10.7433L17.6069 14.8492L18.9744 20.7751C19.0641 21.1638 18.9142 21.5687 18.593 21.8052C18.2718 22.0418 17.8407 22.0648 17.4961 21.8638L12 18.6577L6.50387 21.8638C6.1593 22.0648 5.72822 22.0418 5.40701 21.8052C5.0858 21.5687 4.93591 21.1638 5.02561 20.7751L6.39313 14.8492L1.83103 10.7433C1.54388 10.4849 1.43128 10.0841 1.54178 9.71397C1.65228 9.34379 1.96611 9.07037 2.34794 9.01163L8.33683 8.09026L11.1056 2.55279C11.275 2.214 11.6212 2 12 2ZM12 5.23607L9.89442 9.44721C9.74937 9.73732 9.47263 9.93905 9.15205 9.98837L4.73669 10.6677L8.16896 13.7567C8.43919 13.9999 8.55614 14.3706 8.47439 14.7249L7.49464 18.9704L11.4961 16.6362C11.8075 16.4546 12.1925 16.4546 12.5039 16.6362L16.5054 18.9704L15.5256 14.7249C15.4439 14.3706 15.5608 13.9999 15.831 13.7567L19.2633 10.6677L14.8479 9.98837C14.5274 9.93905 14.2506 9.73732 14.1056 9.44721L12 5.23607Z" fill={color}/>
        </svg>
               
    )
}
export default Star;