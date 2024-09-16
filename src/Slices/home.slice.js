import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
    myprofile:[
        {
            id:1,
            name:"Hello, I'm bhaskar",
            description:"Full Stack Developer (Reactjs, java)| Building Scalable Digital Experiences with Heart, Code, and Passion.",
        }
    ]
};

export const profileSlice = createSlice({
    name:"profileInfo",
    initialState:initialValue,
    reducers:{

    }
});
export default profileSlice.reducer;