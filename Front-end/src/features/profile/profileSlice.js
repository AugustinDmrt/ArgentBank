import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunk pour obtenir les informations du profil utilisateur
export const fetchUserProfile = createAsyncThunk(
  "profile/fetchUserProfile",
  async (token, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message);
      }
      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk pour sauvegarder le nom
export const saveName = createAsyncThunk(
  "profile/saveName",
  async ({ userId, firstName, lastName, token }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId, firstName, lastName }),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message);
      }
      return data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: { firstName: "", lastName: "" },
    isEditing: false,
    status: "idle",
    error: null,
  },
  reducers: {
    editName: (state) => {
      state.isEditing = true;
    },
    cancelEdit: (state) => {
      state.isEditing = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.name = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred";
      })
      .addCase(saveName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(saveName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isEditing = false;
        state.name = action.payload;
      })
      .addCase(saveName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred";
      });
  },
});

export const { editName, cancelEdit } = profileSlice.actions;
export default profileSlice.reducer;
