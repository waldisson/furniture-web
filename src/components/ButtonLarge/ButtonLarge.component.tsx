import React from 'react';
import { TextBodyMidium } from '../../styles/general';
import {
  Container,
  Hidden
} from './ButtonLarge.styles';
import BagIcon from '../../assets/icons/bag';
import { ButtonLargeProps } from './ButtonLarge.types';

const ButtonLarge: React.FC<ButtonLargeProps> = (props) => {
  const { title, iconPosition, variation, icon, disabled, small } = props;

  const contenteIcon = (icon ? icon : <BagIcon />);
  const contentNone = (<TextBodyMidium>{title}</TextBodyMidium>);
  const contentLeft = (
    <>
      {contenteIcon}
      <TextBodyMidium>
        {title}
      </TextBodyMidium>
      <Hidden />
  </>
  );
  const contentRight = (
    <>
      <Hidden />
      <TextBodyMidium>
        {title}
      </TextBodyMidium>
      {contenteIcon}
    </>
  );
  const contentCenterLeft = (
    <>
      {contenteIcon}
      <TextBodyMidium marginLeft={8}>
        {title}
      </TextBodyMidium>
    </>
  );

  const contentCenterRight = (
    <>
      <TextBodyMidium marginLeft={8}> 
        {title}
      </TextBodyMidium>
      {contenteIcon}
    </>
  );

  return (
    <Container
      title={title}
      variation={variation}
      iconPosition={iconPosition}
      disabled={disabled}
      small={small}
    >
      {iconPosition === 'none' && contentNone} 
      {iconPosition === 'left' && contentLeft} 
      {iconPosition === 'right' && contentRight} 
      {iconPosition === 'centerLeft' && contentCenterLeft} 
      {iconPosition === 'centerRight' && contentCenterRight} 

    </Container>
  )
}

export default ButtonLarge;