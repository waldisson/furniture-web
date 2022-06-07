import { ButtonLarge } from "./components";


function App() {
  return (
    <div className="App">
      <ButtonLarge variation="primary" iconPosition="none" title="TEste" /> 
       <div style={{height:10}} />
      <ButtonLarge variation="secundary" iconPosition="none" title="TEste" />
       <div style={{height:10}} />
      <ButtonLarge variation="outline" iconPosition="none" title="TEste" />
        <div style={{height:10}} /> 
      <ButtonLarge variation="ghost" iconPosition="none" title="TEste" /> 
        <div style={{height:10}} />
    </div>
  );
}

export default App;

