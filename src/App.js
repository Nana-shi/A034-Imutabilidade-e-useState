import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png",
    id: 0
  });
  const [pokemon1, setPokemon1] = useState({
    name: "Growlithe",
    type: "Fire",
    evolved: false,
    weight: 19,
    color: "red",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/3/3d/058Growlithe.png/250px-058Growlithe.png",
    id: 58
  });

  // Para fazer seus próximos pokemons, crie novos estados!

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard pokemon={pokemon} setPokemon={setPokemon} />
        <PokemonCard pokemon={pokemon1} setPokemon={setPokemon1} />
        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;
