import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pokemonimg from '../img/Pokemon-Logo.png';

const CharactersDetails = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const [characters, setCharacters] = useState();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setCharacters(res.data))
    }, [id])

    console.log(characters)

    return (
        <>
        <div className='pokeball-back2'></div>
        <div className='container-items-details' style={{
            background: characters?.types?.[0].type.name === "normal" ? "#735159" :
                characters?.types?.[0].type.name === "fighting" ? "#973f26" :
                    characters?.types?.[0].type.name === "flying" ? "#48677b" :
                        characters?.types?.[0].type.name === "poison" ? "#5b2d86" :
                            characters?.types?.[0].type.name === "ground" ? "#ffeb3b" :
                                characters?.types?.[0].type.name === "rock" ? "#46180b" :
                                    characters?.types?.[0].type.name === "bug" ? "#8bc34a" :
                                        characters?.types?.[0].type.name === "ghost" ? "#31336a" :
                                            characters?.types?.[0].type.name === "steel" ? "#5d736c" :
                                                characters?.types?.[0].type.name === "fire" ? "#fb6c6c" :
                                                    characters?.types?.[0].type.name === "water" ? "#70b7fa" :
                                                        characters?.types?.[0].type.name === "grass" ? "#48d0b0" :
                                                            characters?.types?.[0].type.name === "electric" ? "#e2e02d" :
                                                                characters?.types?.[0].type.name === "psychic" ? "#ffeb3b" :
                                                                    characters?.types?.[0].type.name === "ice" ? "#86d2f4" :
                                                                        characters?.types?.[0].type.name === "dragon" ? "#448a94" :
                                                                            characters?.types?.[0].type.name === "dark" ? "#030706" :
                                                                                characters?.types?.[0].type.name === "fairy" ? "#981844" :
                                                                                    characters?.types?.[0].type.name === "fairy" ? "#981844" : "#fff"
        }}>
            <div>
                <button className='button-back' onClick={() => navigate(-1)}><i class="fa-solid fa-caret-left"></i></button>
                <div className='container-imgpoke'>
                    <img src={pokemonimg} alt="" />
                </div>
                <div className='contianer-details'>
                    <div className='container-img-movements'>
                        <div className='box-princpal'>
                            <div className='box-box-first'>
                                <div className='container-name'>
                                    <div className='dimension'>
                                        <h2><b>{characters?.weight}</b></h2>
                                        <p>Weight</p>
                                    </div>
                                    <img src={characters?.sprites?.front_default} alt="" />
                                    <div className='dimension'>
                                        <h2><b>{characters?.height}</b></h2>
                                        <p>Height</p>
                                    </div>
                                </div>
                                <div className='container-name-poke'>
                                    <h1>{characters?.name}</h1>
                                </div>
                                <div className='container-id-poke'>
                                    <h4>#{characters?.id}</h4>
                                </div>
                            </div>
                            <div className='container-twobox'>
                                <div className='twobox-box1'>
                                    <div className='twobox-box1-text'>
                                        <p> </p>
                                        <h3>Type</h3>
                                        <p> </p>
                                    </div>
                                    <div className='twobox-box1-type'>
                                        <p style={{
                                            background: characters?.types?.[0].type.name === "normal" ? "#735159" :
                                                characters?.types?.[0].type.name === "fighting" ? "#973f26" :
                                                    characters?.types?.[0].type.name === "flying" ? "#48677b" :
                                                        characters?.types?.[0].type.name === "poison" ? "#5b2d86" :
                                                            characters?.types?.[0].type.name === "ground" ? "#ffeb3b" :
                                                                characters?.types?.[0].type.name === "rock" ? "#46180b" :
                                                                    characters?.types?.[0].type.name === "bug" ? "#8bc34a" :
                                                                        characters?.types?.[0].type.name === "ghost" ? "#31336a" :
                                                                            characters?.types?.[0].type.name === "steel" ? "#5d736c" :
                                                                                characters?.types?.[0].type.name === "fire" ? "#fb6c6c" :
                                                                                    characters?.types?.[0].type.name === "water" ? "#70b7fa" :
                                                                                        characters?.types?.[0].type.name === "grass" ? "#48d0b0" :
                                                                                            characters?.types?.[0].type.name === "electric" ? "#e2e02d" :
                                                                                                characters?.types?.[0].type.name === "psychic" ? "#ffeb3b" :
                                                                                                    characters?.types?.[0].type.name === "ice" ? "#86d2f4" :
                                                                                                        characters?.types?.[0].type.name === "dragon" ? "#448a94" :
                                                                                                            characters?.types?.[0].type.name === "dark" ? "#030706" :
                                                                                                                characters?.types?.[0].type.name === "fairy" ? "#981844" :
                                                                                                                    characters?.types?.[0].type.name === "fairy" ? "#981844" : "#fff"
                                        }}>{characters?.types?.[0]?.type.name}</p>
                                        <p style={{
                                            background: characters?.types?.[0].type.name === "normal" ? "#735159" :
                                                characters?.types?.[1]?.type.name === "fighting" ? "#973f26" :
                                                    characters?.types?.[1]?.type.name === "flying" ? "#48677b" :
                                                        characters?.types?.[1]?.type.name === "poison" ? "#5b2d86" :
                                                            characters?.types?.[1]?.type.name === "ground" ? "#ffeb3b" :
                                                                characters?.types?.[1]?.type.name === "rock" ? "#46180b" :
                                                                    characters?.types?.[1]?.type.name === "bug" ? "#8bc34a" :
                                                                        characters?.types?.[1]?.type.name === "ghost" ? "#31336a" :
                                                                            characters?.types?.[1]?.type.name === "steel" ? "#5d736c" :
                                                                                characters?.types?.[1]?.type.name === "fire" ? "#fb6c6c" :
                                                                                    characters?.types?.[1]?.type.name === "water" ? "#70b7fa" :
                                                                                        characters?.types?.[1]?.type.name === "grass" ? "#48d0b0" :
                                                                                            characters?.types?.[1]?.type.name === "electric" ? "#e2e02d" :
                                                                                                characters?.types?.[1]?.type.name === "psychic" ? "#ffeb3b" :
                                                                                                    characters?.types?.[1]?.type.name === "ice" ? "#86d2f4" :
                                                                                                        characters?.types?.[1]?.type.name === "dragon" ? "#448a94" :
                                                                                                            characters?.types?.[1]?.type.name === "dark" ? "#030706" :
                                                                                                                characters?.types?.[1]?.type.name === "fairy" ? "#981844" :
                                                                                                                    characters?.types?.[1]?.type.name === "fairy" ? "#981844" : "#fff"
                                        }}>{characters?.types?.[1]?.type.name}</p>
                                    </div>
                                </div>
                                <div className='twobox-box2'>
                                    <div className='twobox-box2-text'>
                                        <p> </p>
                                        <h3>Abilities</h3>
                                        <p> </p>
                                    </div>
                                    <div className='twobox-box2-type'>
                                        <p>{characters?.abilities?.[0]?.ability.name}</p>
                                        <p>{characters?.abilities?.[1]?.ability.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='container-threebox'>
                                <div>
                                    <div className='threebox-box-text'>
                                        <p> </p>
                                        <h3>Stats Base</h3>
                                        <p> </p>
                                    </div>
                                </div>
                                <div>
                                    <div className='container-all-stats'>
                                        <div className='container-Stats'>
                                                <div className='container-all-stats-label'>
                                                    <div className='container-all-stats-label-1'>
                                                        <label for="file">HP:</label>
                                                    </div>
                                                </div>
                                                <div className='container-all-stats-progress'>
                                                    <div className='container-all-stats-progress-1'>
                                                        <progress id="file" max="150" value={characters?.stats[0].base_stat}></progress><b> {characters?.stats[0].base_stat} /150</b>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className='container-Stats'>
                                            <div className='container-all-stats-label'>
                                                <div className='container-all-stats-label-1'>
                                                    <label for="file">Speed:</label>
                                                </div>
                                            </div>
                                            <div className='container-all-stats-progress'>
                                                <div className='container-all-stats-progress-1'>
                                                    <progress id="file" max="150" value={characters?.stats[5]?.base_stat}></progress><b> {characters?.stats[5].base_stat} /150</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='container-Stats'>
                                            <div className='container-all-stats-label'>
                                                <div className='container-all-stats-label-1'>
                                                    <label for="file">Attack:</label>
                                                </div>
                                            </div>
                                            <div className='container-all-stats-progress'>
                                                <div className='container-all-stats-progress-2'>
                                                    <progress id="file" max="150" value={characters?.stats[1]?.base_stat}></progress><b> {characters?.stats[1].base_stat} /150</b>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='container-Stats'>
                                            <div className='container-all-stats-label'>
                                                <div className='container-all-stats-label-1'>
                                                    <label for="file">Defense:</label>
                                                </div>
                                            </div>
                                            <div className='container-all-stats-progress'>
                                                <div className='container-all-stats-progress-2'>
                                                    <progress id="file" max="150" value={characters?.stats[2]?.base_stat}></progress><b> {characters?.stats[2].base_stat} /150</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='box-second'>
                            <button><i class="fa-solid fa-location-dot"></i>Encounters</button>
                            <div className='movements'>
                                <h1>Movements</h1>
                                {
                                    characters?.moves?.map(e => (
                                        <p>{e.move.name}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CharactersDetails;