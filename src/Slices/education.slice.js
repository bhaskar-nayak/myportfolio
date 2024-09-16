import { createSlice } from "@reduxjs/toolkit";
 
const initialValue = {
    myeducation:[
        {
            id:1,
            collegeLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOctQAfwCC-9QeHPQsb3mS_SgBpDgL6bg3rw&s",
            name:"Malla Reddy College of Engineering",
            course:"Bachelor’s Degree in Computer Science (CSE)",
            passedout:"2016 - 2020"
        }
    ]
};
export const eductationSlice = createSlice({
    name:"educationInfo",
    initialState:initialValue,
    reducers:{

    }
});
export default eductationSlice.reducer;