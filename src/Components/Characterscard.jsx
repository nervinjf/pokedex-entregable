import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../img/pokeball.81cfacf9.png'

const Characterscard = ({ url, type }) => {

    const [character, setCharacter] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, []);

    let index = [];

    character.types?.map(e => (
        index.push(e.type.name)
    ))

    return (
        <>        
        <div className='card' onClick={() => navigate(`/charactersdetails/${character.id}`)} 
        style={{background: character.types?.[0].type.name === "normal" ? "#735159": 
            character.types?.[0].type.name === "fighting" ? "#973f26" :
            character.types?.[0].type.name === "flying" ? "#48677b" :
            character.types?.[0].type.name === "poison" ? "#5b2d86" :
            character.types?.[0].type.name === "ground" ? "#ffeb3b" :
            character.types?.[0].type.name === "rock" ? "#46180b" : 
            character.types?.[0].type.name === "bug" ? "#8bc34a" : 
            character.types?.[0].type.name === "ghost" ? "#31336a" :
            character.types?.[0].type.name === "steel" ? "#5d736c" : 
            character.types?.[0].type.name === "fire" ? "#fb6c6c" :
            character.types?.[0].type.name === "water" ? "#70b7fa" :
            character.types?.[0].type.name === "grass" ? "#48d0b0" :
            character.types?.[0].type.name === "electric" ? "#e2e02d" :
            character.types?.[0].type.name === "psychic" ? "#ffeb3b" :
            character.types?.[0].type.name === "ice" ? "#86d2f4" :
            character.types?.[0].type.name === "dragon" ? "#448a94" :
            character.types?.[0].type.name === "dark" ? "#030706" :
            character.types?.[0].type.name === "fairy" ? "#981844" :
            character.types?.[0].type.name === "fairy" ? "#981844" : "#fff"}}>

            <h1>{character.name}</h1>
            <div className='card2'>
              <div className='container-item-card'>
            <div className='background'>
                <p><b>types: </b>{character.types?.[0]?.type.name}, {character.types?.[1]?.type.name}</p>
            </div>
            <div className='background'>
                <p><b>hp: </b>{character.stats?.[0].base_stat}</p>
            </div>
            <div className='background'>
                <p><b>Attack: </b>{character.stats?.[1].base_stat}</p>
            </div>
            <div className='background'>
                <p><b>Defense: </b>{character.stats?.[2].base_stat}</p>
            </div>
            <div className='background'>
                <p><b>Speed: </b>{character.stats?.[5].base_stat}</p>
            </div> 
            </div>
            <div className='container-img'>
                <img src={character.sprites?.front_default} alt="" />
            </div>  
            </div>
        </div>
        </>
        
    );
};

export default Characterscard;