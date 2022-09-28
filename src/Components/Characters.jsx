import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import Characterscard from './Characterscard';
import { useNavigate } from 'react-router-dom';
import { getNumber } from '../store/slice/number.slice';
import { useDispatch } from 'react-redux';

const Characters = () => {

    const [pokemon, setPokemon] = useState([]);
    const [check, setCheck] = useState(false);
    const [typesList, setTypesList] = useState([]);
    const [nameInput, setNameInput] = useState("");

    const navigate = useNavigate();

    const name = useSelector(state => state.userName);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155`)
            .then(res => setPokemon(res.data.results))

        axios.get(`https://pokeapi.co/api/v2/type`)
            .then(res => setTypesList(res.data.results))
    }, [])

    const searchPokemon = () => {
        navigate(`/charactersdetails/${nameInput}`);
    }

    const types = "";

    const searchLocations = (typesUrl) => {
        axios.get(typesUrl)
            .then(res => setPokemon(res.data.pokemon))
    }

    const number = useSelector(state => state.number);

    const [page, setPage] = useState(1);
    const charactersPerPage = number;
    const lastCharactersIndex = page * charactersPerPage;
    const firstCharactersIndex = lastCharactersIndex - charactersPerPage;
    const charactersPaginater = pokemon.slice(firstCharactersIndex, lastCharactersIndex);
    const totalPage = Math.ceil(pokemon.length / charactersPerPage);
    const pageNumbers = []

    for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i)
    }
    
    const theme = useSelector(state => state.change)

    return (
        <>
            <div className='pokeball-back1'></div>
            <div className='container-pokedex' >
                <div className='welcome-pokexed'>
                    <div className='container-h1-leave'>
                        <h1>Pokedex</h1>
                        <div className='leave'>
                        <button onClick={() => navigate("/")}><i class="fa-solid fa-right-from-bracket"></i></button>
                        </div>
                        <div className='container-settings'>
                            <button onClick={() => navigate("/settings")}><i class="fa-solid fa-gear"></i></button>
                        </div>
                    </div>
                    
                    <p>Welcome <b>{name}</b>, here you can find your favorite pokemon</p>
                </div>
                <div>
                    <div className='select-type-pokemon'>
                        <p>Type</p>
                        <div className='toogle'>
                            <input type="checkbox" name="" id="" checked={check} onClick={e =>  setCheck(e.target.checked)}/>
                        </div>
                        
                        <p>Search</p>
                    </div>
                    <div className='select-pokemon'>
                        <div className='Select' style={{display: check === false ? "block" : "none"}}>
                            <select onChange={e => searchLocations(e.target.value)}>
                                {
                                    typesList.map(type => (
                                        <option value={type.url} key={type.name}>{type.name}</option>
                                    ))
                                }

                            </select>
                        </div>
                        <div className='search' style={{display: check === true ? "block" : "none"}}>
                            <input type="text" placeholder='Search Pokemon' value={nameInput}
                                onChange={e => setNameInput(e.target.value)} />
                            <button onClick={searchPokemon}><i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </div>

                <div className='card1'>
                    {
                        charactersPaginater.map(poke => (
                            <Characterscard url={poke.url ? poke.url : poke.pokemon.url} key={poke.url ? poke.url : poke.pokemon.url} type={typesList} />
                        ))
                    }

                </div>
            </div>
            <div className='container-numberPage'>
                <div className='numberPage'>
                    <button onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    ><i class="fa-solid fa-angles-left"></i></button>
                    {
                        pageNumbers.map(number => (
                            <button onClick={() => setPage(number)}>{number}</button>
                        ))

                    }

                    <button onClick={() => setPage(page + 1)}
                        disabled={page === totalPage}
                    ><i class="fa-solid fa-angles-right"></i></button>
                </div>
            </div>

        </>
    );
};

export default Characters;