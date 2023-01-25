import { createSlice } from "@reduxjs/toolkit";

const initialState = { typeOne: {}, typeTwo: {}, typeThree: {}, typeFour: {} };

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    input(state, action) {
      console.log(action.payload.type);
      switch (action.payload.type) {
        case "FOUR":
          return {
            ...state,
            typeFour: {
              ...state.typeFour,
              [action.payload.id]: { value: action.payload.value },
            },
          };
        //   state.typeFour[action.payload.id].value = action.payload.value;
      }
    },
  },
});

export const inputReducer = inputSlice.reducer;
export default inputSlice.actions;
