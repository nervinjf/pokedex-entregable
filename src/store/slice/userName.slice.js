import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const UserNameSlice = createSlice({
	name: "userName",
    initialState: "",
    reducers: {
        changeName: (state, action) =>{
            const userName = action.payload;
            return userName;
        }
    }
})

export const { changeName } = UserNameSlice.actions;

export default UserNameSlice.reducer;