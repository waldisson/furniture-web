import MinusIcon from '../../assets/icons/minus';
import PlusIcon from '../../assets/icons/plus';
import React, { useState } from 'react';
import colors from '../../styles/colors';
import { Container } from './ButtonCounter.style';
import { ButtonCounterProps } from './ButtonCounter.types';

const ButtonCounter: React.FC<ButtonCounterProps> = (props) => {

  const { min = 0, max = 5 } = props;
  const [value, setValue] = useState(0);

  const disabledLess = value === min;
  const disabledMore = value === max;

  const more = () => (value < max) && setValue(value + 1);
  const less = () => (value > min) && setValue(value - 1);

  return (
    <Container>
      <button onClick={less} disabled={disabledLess}>
        <MinusIcon color={disabledLess ? colors.gray500 : colors.black} />
      </button>
      <span>{value}</span>
      <button onClick={more} disabled={disabledMore}>
        <PlusIcon color={disabledMore ? colors.gray500 : colors.black} />
      </button>
    </Container>
  )
}

export default ButtonCounter;