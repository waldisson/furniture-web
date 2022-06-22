import React from 'react';
import colors from '../../styles/colors';

const Engineer = (props: React.SVGProps<SVGSVGElement>) => {
    const { width = 24, height = 24, color = colors.black } = props;
    return (
        <svg width={width} height={height} 
            viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 10C14 12.2091 12.2091 14 9.99998 14C7.79085 14 5.99998 12.2091 5.99998 10C5.99998 7.79086 7.79085 6 9.99998 6C12.2091 6 14 7.79086 14 10ZM12 10C12 11.1046 11.1046 12 9.99998 12C8.89542 12 7.99998 11.1046 7.99998 10C7.99998 8.89543 8.89542 8 9.99998 8C11.1046 8 12 8.89543 12 10Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.98538 1.15554C9.0753 -0.0106277 10.9247 -0.0106283 12.0146 1.15554L12.3016 1.46263C12.8452 2.04427 13.6137 2.36258 14.4093 2.33569L14.8294 2.32149C16.4247 2.26758 17.7324 3.57527 17.6785 5.17057L17.6643 5.59066C17.6374 6.38633 17.9557 7.15479 18.5374 7.6984L18.8444 7.98541C20.0106 9.07533 20.0106 10.9247 18.8444 12.0146L18.5374 12.3016C17.9557 12.8452 17.6374 13.6137 17.6643 14.4094L17.6785 14.8295C17.7324 16.4248 16.4247 17.7324 14.8294 17.6785L14.4093 17.6643C13.6137 17.6374 12.8452 17.9558 12.3016 18.5374L12.0146 18.8445C10.9247 20.0106 9.0753 20.0106 7.98538 18.8445L7.69837 18.5374C7.15476 17.9558 6.3863 17.6374 5.59063 17.6643L5.17054 17.6785C3.57524 17.7324 2.26754 16.4248 2.32146 14.8295L2.33565 14.4094C2.36254 13.6137 2.04424 12.8452 1.4626 12.3016L1.15551 12.0146C-0.0106582 10.9247 -0.0106589 9.07533 1.15551 7.98541L1.4626 7.6984C2.04424 7.15479 2.36254 6.38633 2.33565 5.59066L2.32146 5.17057C2.26754 3.57527 3.57524 2.26758 5.17054 2.32149L5.59063 2.33569C6.38629 2.36258 7.15476 2.04427 7.69837 1.46263L7.98538 1.15554ZM10.5534 2.52118L10.8404 2.82827C11.7783 3.83176 13.1041 4.38094 14.4769 4.33454L14.897 4.32035C15.3352 4.30554 15.6945 4.66477 15.6796 5.10301L15.6654 5.5231C15.6191 6.89586 16.1682 8.22169 17.1717 9.15957L17.4788 9.44658C17.7992 9.74599 17.7992 10.254 17.4788 10.5534L17.1717 10.8405C16.1682 11.7783 15.6191 13.1042 15.6654 14.4769L15.6796 14.897C15.6945 15.3352 15.3352 15.6945 14.897 15.6797L14.4769 15.6655C13.1041 15.6191 11.7783 16.1683 10.8404 17.1717L10.5534 17.4788C10.254 17.7992 9.74596 17.7992 9.44655 17.4788L9.15954 17.1717C8.22166 16.1683 6.89583 15.6191 5.52307 15.6655L5.10298 15.6797C4.66474 15.6945 4.30551 15.3352 4.32032 14.897L4.33451 14.4769C4.38091 13.1042 3.83173 11.7783 2.82824 10.8405L2.52115 10.5534C2.20079 10.254 2.20079 9.74599 2.52115 9.44658L2.82824 9.15957C3.83173 8.22169 4.38091 6.89587 4.33451 5.52311L4.32032 5.10301C4.30551 4.66477 4.66474 4.30554 5.10298 4.32035L5.52308 4.33454C6.89583 4.38094 8.22166 3.83176 9.15954 2.82827L9.44655 2.52118C9.74596 2.20082 10.254 2.20083 10.5534 2.52118Z" fill="#212121"/>
        </svg>   
    )
}
export default Engineer;