import React from 'react';
import { Container, Text} from './Input.style';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = (props) => {
  
const { variation, value, placeholder = 'Empty', disabled, description, error ,onChange } = props;


return (
    <Container variation={variation} onChange={onChange}>
      <input 
        disabled={disabled} 
        required={error} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
      <Text 
        error={error}
      >
          {description}
      </Text>
    {/* {error 
      ? <p>Error message</p>  
      : <label>{description}</label>
    } */}
    </Container>
  )
}

export default Input;