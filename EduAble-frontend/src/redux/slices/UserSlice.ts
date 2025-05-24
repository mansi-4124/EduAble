import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  user_id: string | null;
  phone: string | null;
  email: string | null;
  role:
    | "buyer"
    | "seller"
    | "admin"
    | "verification_officer"
    | "product_manager"
    | null;
}

const initialState: UserState = {
  user_id: null,
  phone: null,
  email: null,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.user_id = action.payload.user_id;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    clearUserData: (state) => {
      state.user_id = null;
      state.phone = null;
      state.email = null;
      state.role = null;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
