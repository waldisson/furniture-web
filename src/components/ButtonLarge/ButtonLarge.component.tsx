import React from 'react';
import {
  Container,
} from './ButtonLarge.styles';
import { ButtonLargeProps } from './ButtonLarge.types';

const ButtonLarge: React.FC<ButtonLargeProps> = (props) => {
  const { title, iconPosition, variation, icon } = props;

  // const contentNone = ();
  // const contentLeft = ();
  // const contentRight = ();
  // const contentCenterLeft = ();
  // const contentCenterRight = ();

  return (
    <Container
      title={title}
      variation={variation}
      iconPosition={iconPosition}
    >
      {title}
    </Container>
  )
}

export default ButtonLarge;