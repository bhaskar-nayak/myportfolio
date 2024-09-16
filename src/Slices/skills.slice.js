import { createSlice } from "@reduxjs/toolkit";
const initialValue ={
    myskills:[
        {
            id:1,
            skillsList:[
                'Reactjs',
                'ReduxToolKit',
                'Javascript',
                'Java','Spring boot','spring framework','Spring Mvc','spring security','jwt Token',
                'RestFul API','Hibernate','MySql','C programming',
            ]
        }
    ]
};
export const skillsSlice=createSlice({
    name:"skillsInfo",
    initialState:initialValue,
    reducers:{}
})
export default skillsSlice.reducer;