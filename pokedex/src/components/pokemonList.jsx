import React, { useEffect, useState } from "react";
import PokemonThumbnail from "./pokemonThumbnail";



const PokemonList = (props) => {
    
    const [pokemonList,setPokemonList]= useState([]);

    // Useeffece va s'appliquer quand le composant est monté et quand les props et les states s' update
    // https://pokeapi.co/api/v2/pokemon
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then((Response) => { return Response.json() })
            .then((Response) => {
                console.log(Response)
                setPokemonList(Response.results);
            })

    }, [])

    return (
        <div className="pokList">
            <h2>pokemonList</h2>
            {pokemonList.map((pokemon) =>{
                return <div onClick={() => {props.onPokemonClick(pokemon)}}><PokemonThumbnail pokemon={pokemon}></PokemonThumbnail></div>
                
            })}
            
        </div>
    )
}

export default PokemonList;