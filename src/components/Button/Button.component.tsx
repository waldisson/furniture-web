import BagIcon from '../../assets/icons/bag';
import React from 'react';
import { TextBodyMidium } from '../../styles/general';
import { Container, Hidden } from './Button.style';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => {
  
  const { title, iconPosition, variation, icon , disabled, small } = props;

  const contentIcon =  (icon? icon: <BagIcon />);

  const contentNone = (<TextBodyMidium>{title}</TextBodyMidium>);

  const contentRight = (
    <>
      <Hidden />
      <TextBodyMidium>
        {title}
      </TextBodyMidium>
     {contentIcon}
    </>
  );

  const contentLeft = (
    <>
      {contentIcon}
      <TextBodyMidium>
        {title}
      </TextBodyMidium>
      <Hidden />
    </>
  );

  const contentCenterRight = (
    <>
      <TextBodyMidium marginRight={8}>
        {title}
      </TextBodyMidium>
     {contentIcon}
    </>
  );

  const contentCenterleft = (
    <>
      {contentIcon}
      <TextBodyMidium marginLeft={8}>
        {title}
      </TextBodyMidium>
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
      {iconPosition === 'centerRight' && contentCenterRight}
      {iconPosition === "centerleft" && contentCenterleft}
    </Container>
  )
}

export default Button;