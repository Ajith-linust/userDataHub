import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../state";
import { IAction } from "./types";

/**
 * Reducer - logics Handling and State updation
 */

export const userDataHubReducer = createSlice({
  name: "usersInformation",
  initialState,
  reducers: {
    updateLoader: (state, action: PayloadAction<{
      users?: boolean;
      personalInformation?: boolean;
    }>) => {
      state.loader = {
        ...state.loader,
        ...action.payload
      };
    },
    updateUsersInformation: (state, action: PayloadAction<IAction>) => {
      state.users = action.payload.users;
      state.loader = {
        users: false,
        personalInformation: false
      }
    },
    updatePersonInformation: (state, action: PayloadAction<{ id: number }>) => {
      state.users.forEach((data) => {
        if (data.id === action.payload.id) {
          state.personInformation = data;
        }
      });
      state.loader = {
        users: false,
        personalInformation: false
      }
    },
  },
});

export const { updateUsersInformation, updatePersonInformation, updateLoader } =
  userDataHubReducer.actions;

export default userDataHubReducer.reducer;
