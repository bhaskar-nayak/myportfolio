import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
    mycertificate: [
        {
            id: 1,
            name: "Certification in Full Stack Development",
            issuingOrg: "Digital Lync",
            dateEarned: "August 23, 2023",
            description: "Completed an intensive course in full-stack development, focusing on building scalable web applications using ReactJS for the front-end and Java with Spring Boot for the back-end.",
        }
    ]
};
export const certificateSlice = createSlice({
    name:"certificateInfo",
    initialState:initialValue,
    reducers:{}
});
export default certificateSlice.reducer;