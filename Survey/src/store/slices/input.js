import { createSlice } from "@reduxjs/toolkit";

const initialState = { typeOne: {}, typeTwo: {}, typeThree: {}, typeFour: {} };

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    input(state, action) {
      //   console.log(action.payload.type);
      switch (action.payload.type) {
        case "FOUR":
          return {
            ...state,
            typeFour: {
              ...state.typeFour,
              [action.payload.id]: { value: action.payload.value },
            },
          };
        case "ONE":
          return {
            ...state,
            typeOne: {
              ...state.typeOne,
              [action.payload.id]: { value: action.payload.value },
            },
          };
        case "TWO":
          return {
            ...state,
            typeTwo: {
              ...state.typeTwo,
              [action.payload.id]: { value: action.payload.value },
            },
          };
        case "THREE_INITIAL":
          const obj = {};
          for (let choice of action.payload.choices) {
            // console.log(choice);
            obj[choice.id] = false;
          }
          return {
            ...state,
            typeThree: {
              ...state.typeThree,
              [action.payload.id]: obj,
            },
          };
        case "THREE":
          state.typeThree[action.payload.id][action.payload.value] =
            !state.typeThree[action.payload.id][action.payload.value];
        case "FIVE":
          return {
            ...state,
            typeFive: {
              ...state.typeFive,
              [action.payload.id]: {
                filename: action.payload.filename,
                url: action.payload.url,
              },
            },
          };
        //   state.typeFour[action.payload.id].value = action.payload.value;
      }
    },
  },
});

export const inputReducer = inputSlice.reducer;
export default inputSlice.actions;
