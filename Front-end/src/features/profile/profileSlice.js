import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditing: false,
  name: { firstName: "Tony", lastName: "Jarvis" },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editName: (state) => {
      state.isEditing = true;
    },
    saveName: (state, action) => {
      state.isEditing = false;
      state.name = action.payload;
    },
    cancelEdit: (state) => {
      state.isEditing = false;
    },
  },
});

export const { editName, saveName, cancelEdit } = profileSlice.actions;

export default profileSlice.reducer;
