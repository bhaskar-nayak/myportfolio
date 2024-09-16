import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './Slices/home.slice';
import aboutReducer from './Slices/about.slice';
import skillsReducer from './Slices/skills.slice';
import projectheaderReducer from './Slices/projectheader.slice';
import myprojectReducer from './Slices/myproject.slice';
import educationReducer from './Slices/education.slice';
import contactReducer from './Slices/contact.slice';
import certiReducer from './Slices/certificate.slice';
export const store = configureStore({
    reducer:{
        profileInfo:profileReducer,
        aboutInfo:aboutReducer,
        skillsInfo:skillsReducer,
        projectHeaderInfo:projectheaderReducer,
        myprojectInfo:myprojectReducer,
        educationInfo:educationReducer,
        contactInfo:contactReducer,
        certificateInfo:certiReducer,
    }
})