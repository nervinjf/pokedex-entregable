import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slice/userName.slice'
import pokemonSlice, { PokemonSlice } from './slice/pokemon.slice'
import numberSlice from './slice/number.slice'
import themeSlice from './slice/theme.slice'

export default configureStore({
  reducer: {
        userName: userNameSlice,
        pokemon: PokemonSlice,
        number: numberSlice,
        change: themeSlice
	}
})