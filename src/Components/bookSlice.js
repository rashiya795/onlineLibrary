import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name:'books',
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
    },
})
export const { addItems } = bookSlice.actions;

export default bookSlice.reducer