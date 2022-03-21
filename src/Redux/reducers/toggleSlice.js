import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
	name: 'toggle',
	initialState: {
        isToggle: true,
        active:false,
        btnInfo: {
            addBtn:"Add",
            backBtn:"Back",
            primary:"primary",
            danger:"danger"
        }
    },
	reducers: {
		toggleComponent: (state, action) => {
            console.log(action.payload);
            state.active = action.payload
        },  
	},
});

export const { toggleComponent } = toggleSlice.actions;
export default toggleSlice.reducer;