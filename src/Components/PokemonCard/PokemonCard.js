import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";

const PokemonCard = (props) => {
  const evoluirPokemon = (pokemonName) => {
    if (pokemonName === "Pichu") {
      props.setPokemon({
        ...props.pokemon,
        name: "Pikachu",
        type: "Electric",
        evolve: true,
        weight: 6,
        color: "yellow",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/b/b8/025Pikachu_LG.png/240px-025Pikachu_LG.png",
        id: 25
      });
    } else if (pokemonName === "Growlithe") {
      props.setPokemon({
        ...props.pokemon,
        name: "Arcanine",
        type: "Fire",
        evolve: true,
        weight: 155,
        color: "red",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/b/b8/059Arcanine.png/250px-059Arcanine.png",
        id: 59
      });
    }
    console.log("CLique no botão para evoluir!");
  };

  return (
    <Card color={props.pokemon.color}>
      <img src={props.pokemon.image} alt={`Pokemon`} />
      <PokemonName>{props.pokemon.name}</PokemonName>
      <PokemonType>{props.pokemon.type}</PokemonType>
      <p>{props.pokemon.weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon(props.pokemon.name)}>
        Evoluir!
      </EvolveButton>
    </Card>
  );
};

export default PokemonCard;
