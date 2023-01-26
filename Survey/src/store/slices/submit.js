import { createSlice } from "@reduxjs/toolkit";

const submit = createSlice({
  name: "submit",
  initialState: { loading: false, submitted: false },
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
      }
    },
    submit(state) {
      state.submitted = true;
    },
  },
});

export const submitReducer = submit.reducer;

export default submit.actions;
