import PhotoIcon from '../../assets/icons/photo';
import React from 'react';
import { Container } from './Avatar.style';
import { AvatarProps } from './Avatar.types';

const Button: React.FC<AvatarProps> = (props) => {

const { image, size, icon = <PhotoIcon width={(size || 56) - 10} height={(size || 56) - 10} />, imageUrl, padding } = props;
  
  const PaddingIcon: Record<number , number> = {
    56: 16,
    36: 10,
    24: 6,
  } || 16;

  return (
    <Container
      image={image}
      icon={icon}
      imageUrl={imageUrl}
      size={size}
      padding={PaddingIcon[size || 56]}
    >
      {
        image ? <img src={imageUrl} /> : icon
      }
    </Container>
  )
}

export default Button;