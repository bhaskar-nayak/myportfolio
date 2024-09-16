import { createSlice } from "@reduxjs/toolkit";
const initialValue ={
    myprojects:[
        {
            id:1,
            title:"Ecommerce Shopping Application",
            date:"July 18 - present",
            description:"Developed a secure, user-friendly e-commerce application using React.js and Spring Boot, featuring a responsive design and seamless product management. ",
            technologies:['Spring Boot','Spring Security','Jwt token','Restful API','Reactjs','Reduxtoolkit','Redux Thunk','Html','css','Bootstrap'],
            button1:'Website',
            button2:'Source',
        }
    ]
};
export const myprojectSlice = createSlice({
    name:'myprojectInfo',
    initialState:initialValue,
    reducers:{

    }
});
export default myprojectSlice.reducer;