import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      uid: "", photoUrl: "", displayname: ""
    }
  },
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {uid:"", photoUrl: "", displayname: ""}
    }
    },
  },
);

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
