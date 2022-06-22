import { Avatar, ButtonLarge } from "./components";


function App() {
  return (
    <div className="App">
     <ButtonLarge variation="primary" iconPosition="none" title="Teste" small/>

     <Avatar />
     <Avatar size={36} imageUrl="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"/>
     <Avatar size={24} />
    </div>
  );
}

export default App;

