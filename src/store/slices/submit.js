import { createSlice } from "@reduxjs/toolkit";

const submit = createSlice({
  name: "submit",
  initialState: { loading: false, submitted: false, alert: false },
  reducers: {
    loader(state, action) {
      //   console.log(action.payload.type);
      switch (action.payload.type) {
        case "START":
          return {
            ...state,
            loading: true,
          };
        case "END":
          return {
            ...state,
            loading: false,
          };
        default:
          return state;
      }
    },
    submit(state) {
      state.submitted = true;
    },
    alert(state, action) {
      switch (action.payload.type) {
        case "START":
          state.alert = true;
          break;
        case "END":
          state.alert = false;
          break;
        default:
          return state;
      }
    },
  },
});

export const submitReducer = submit.reducer;

export default submit.actions;
