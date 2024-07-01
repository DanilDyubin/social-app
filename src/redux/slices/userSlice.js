import { createSlice } from '@reduxjs/toolkit';

// interface IUserState {
//   user: any;
//   id: string | number | null;
//   name: string | null;
//   email: string | null;
//   token: string | null;
//   avatar: string | null;
//  : IUserState }

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  name: 'Unnamed',
  email: localStorage.getItem('email') || null,
  token: null,
  id: null,
  avatar: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.avatar = action.payload.avatar;
      // localStorage.setItem('email', JSON.parse(JSON.stringify(state.email)));
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    removeUser(state) {
      state.user = null;
      state.name = null;
      state.email = null;
      state.token = null;
      state.id = null;
      state.avatar = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
