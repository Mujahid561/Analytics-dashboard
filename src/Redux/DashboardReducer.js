import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  showNatificationBar: true,
  darkMode: false,
  colors: {

    lightModePrimary:"#1C1C1C",
    darkModePrimary:"",
    lightModeBG:"#F7F9FB",
    darkModeBG:"",
    lightModePrimaryText:"#000000",
    darkModePrimaryText:"FFFFFF",
    
    barChart:{
        darkModeBarBG:"#A8C5DA",
        lightModeBarBG:"#A8C5DA"
    },
    graph:{
        LightModepreviousWeekClr:"A8C5DA",
         LightModecurrentWeekClr:"#1C1C1C",
         darkModepreviousWeekClr:"A8C5DA",
         darkModecurrentWeekClr:"#C6C7F8"

    },
    locationChart:{
        darkModeprogressBar:"A8C5DA",
        darkModeprogressBarBG:"#1C1C1C"
    },
    orders:{
       Approved:"#FFC555",
       Pending:"#59A8D4",
       Completed:"#4AA785",
       InProgress:"#8A8CD9"

    }
  },
};

export const dataReducer = createSlice({
  name: "DataReducer",
  initialState,
  reducers: {
    hideNotification: (state) => {
      state.showNatificationBar = false;
    },
    showNotification: (state) => {
      state.showNatificationBar = true;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { hideNotification, showNotification, toggleDarkMode } =
  dataReducer.actions;

export default dataReducer.reducer;
