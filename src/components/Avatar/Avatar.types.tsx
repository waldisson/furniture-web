import { GeneralStylesProps } from "../../shared/general";

export interface AvatarProps  extends GeneralStylesProps{
    image?: boolean,
    icon?: React.ReactNode,
    imageUrl?: string, 
    size?: number,
}
