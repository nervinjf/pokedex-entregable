import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const PokemonSlice = createSlice({
	name: "pokemon",
    initialState: "",
    reducers: {
        pokemon: (state, action) =>{
            return userName;
        }
    }
})

export const { pokemon } = PokemonSlice.actions;

export default PokemonSlice.reducer;