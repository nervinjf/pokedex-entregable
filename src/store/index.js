import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slice/userName.slice'
import pokemonSlice, { PokemonSlice } from './slice/pokemon.slice'

export default configureStore({
  reducer: {
        userName: userNameSlice,
        pokemon: PokemonSlice
	}
})