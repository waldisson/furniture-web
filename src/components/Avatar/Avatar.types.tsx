import { GeneralStylesProps } from "../../shared/general";

export interface AvatarProps extends GeneralStylesProps {
  icon?: React.ReactNode;
  image?: React.ReactNode,
  imageUrl?: string,
  size?: number,
}