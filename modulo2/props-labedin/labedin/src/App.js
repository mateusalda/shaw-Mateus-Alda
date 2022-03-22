import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Round&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Light" 
          nome="Mateus Aldá" 
          descricao="Oi, eu sou o Mateus. Sou estudante da labenu e gamer nas horas vagas. Adoro codar e jogar e codar jogos."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/626/626013.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/1024px-Video-Game-Controller-Icon-IDV-green.svg.png" 
          nome="Game" 
          descricao="Desenvolvo um projeto pessoal de um jogo de cartas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Meus endereços</h2>
        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/725/725643.png" 
          texto="mateus.alda@gmail.com" 
        />        

        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/3203/3203071.png" 
          texto="Rua dos Bobos, 0" 
        />        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
