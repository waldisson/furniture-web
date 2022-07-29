import React from 'react';
import { TextBodyMidium } from '../../styles/general';
import { Container} from './InputRange.style';
import { InputRangeProps } from './InputRange.types';

const InputRange: React.FC<InputRangeProps> = (props) => {
  
const { variation, min = 0, max = 100, code = '$ ', value,onChange } = props;

const textLeft: Record<InputRangeProps['variation'], string> = {
  none: '',
  price: 'Price',
  number: code + String(min),
};

const textRight: Record<InputRangeProps['variation'], string> = {
  none: '',
  price: code + value,
  number: code +value,
};
const mySlider = document.getElementsByClassName("id");

return (
    <Container variation={variation} onChange={onChange}>
      <div className='text-container'>
        <TextBodyMidium>{textLeft[variation]}</TextBodyMidium>
        <TextBodyMidium>{textRight[variation]}</TextBodyMidium>
      </div>
      <input className='id' type="range" min={min} max={max} value={value} onChange={onChange} />
    </Container>
  )
}

export default InputRange;