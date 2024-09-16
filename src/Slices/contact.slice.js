import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
    mycontact:[
        {
            id:1,
            title:"Get in Touch",
            description:"",
        }
    ]
};
export const contactSlice = createSlice({
    name:"contactInfo",
    initialState:initialValue,
    reducers:{

    }
});
export default contactSlice.reducer;