import { createSlice } from "@reduxjs/toolkit";

const initialValue={
    projectHeader:[
        {
            id:1,
            name:'My Projects',
            title:'Check out my latest work',
            description:'worked on a variety of projects, from simple websites to complex web applications.'
        }
    ]
};
export const projectHeaderSlice = createSlice({
    name:'projectHeaderInfo',
    initialState:initialValue,
    reducers:{}
});
export default projectHeaderSlice.reducer;