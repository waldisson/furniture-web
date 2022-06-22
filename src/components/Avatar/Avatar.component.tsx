import React from 'react';
import Camera from '../../assets/icons/camera';

import {
  Container,
} from './Avatar.styles';
// import BagIcon from '../../assets/icons/bag';
import { AvatarProps } from './Avatar.types';

const Avatar: React.FC<AvatarProps> = (props) => {
  const { image, size, icon = <Camera width={(size || 56) - 10} height={(size || 56) - 10}/>, imageUrl  } = props;

  const PaddingIcon: Record<number, number> = {
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
        image ? <img src={imageUrl} alt="" /> : icon
      }

    </Container>
  )
}

export default Avatar;