import React, { useState } from 'react';
import GlobalStyle from './styles/global';

import {Input} from './components';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  // const [error, setError] = useState('');
  return(
  <>
   <GlobalStyle />
   <div style={{padding: 100}}>
      <div style={{marginBottom:20}}>
        <Input variation="default" value={value} onChange={(v)=>setValue(v.currentTarget.value)}/>
      </div>
      <div style={{marginBottom:20}}>
        <Input disabled variation="default" value={value} onChange={(v)=>setValue(v.currentTarget.value)}/>
      </div>
      <div style={{marginBottom:20}}>
        <Input variation="default" description="Descrição" value={value} onChange={(v)=>setValue(v.currentTarget.value)}/>
      </div>
      <div>
        <Input variation="default" error description="Error message" value={value} onChange={(v)=>setValue(v.currentTarget.value)}/>
      </div>
   </div>
  </>
)};

export default App;
