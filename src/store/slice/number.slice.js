import { createSlice } from '@reduxjs/toolkit';

export const numberSlice = createSlice({
    name: 'number',
    initialState: 20,
    reducers: {
        getNumber: (state, action) =>{
            return action.payload
        }
    }
})

export const { getNumber } = numberSlice.actions;

export default numberSlice.reducer;
