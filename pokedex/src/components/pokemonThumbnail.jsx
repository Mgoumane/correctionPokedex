import React, { useEffect, useState } from "react";
const PokemonThumbnail = ({ pokemon }) => {// A voir avec Xavier !

    const [image, setImage] = useState("");


    useEffect(() => {
        fetch(pokemon.url)
            .then((Response) => { return Response.json() })
            .then((Response) => {
                console.log(Response);
                setImage(Response.sprites.front_default);
            })

    }, [pokemon])// CETTE FONCTION DEPEND DU POKEMON 

    return (


        <div className="pokThumbnail">
            <h2>{pokemon.name}</h2>
            <img src={image}></img>
            
        </div>
    )
}

export default PokemonThumbnail;