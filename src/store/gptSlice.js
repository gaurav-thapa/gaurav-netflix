import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gptSlice',
    initialState:{
        searchView:false,
    },
    reducers:{
        toggleSearchView : (state) =>{
            state.searchView = !state.searchView;
        }
    }
});

export const gptSearchSliceActions = gptSlice.actions;
export const gptSearchSliceReducers = gptSlice.reducer;