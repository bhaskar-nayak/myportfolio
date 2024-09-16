import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    aboutprofile: [
        {
            about: "Full-stack developer fueled by a passion for building innovative solutions with Spring Boot and ReactJS. From struggles to triumphs, I've grown through every line of code, driven by a relentless pursuit of excellence. With each project, I push boundaries, learn, and adapt, dedicated to crafting exceptional user experiences that leave a lasting impact"
        }
    ]
};
export const aboutSlice = createSlice({
    name: "aboutInfo",
    initialState: initialValue,
    reducers: {}
});
export default aboutSlice.reducer;